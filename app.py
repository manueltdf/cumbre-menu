import os
import sqlite3
from flask_wtf.csrf import CSRFProtect
from pathlib import Path
from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for, session, abort
from werkzeug.security import check_password_hash

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "menu.db"

load_dotenv(BASE_DIR / ".env")

app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]
app.config["ADMIN_PASSWORD_HASH"] = os.environ["ADMIN_PASSWORD_HASH"]

app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"

csrf = CSRFProtect(app)

@app.route("/")
def inicio():
    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row

    try:
        productos = conexion.execute("""
            SELECT id, nombre, precio, categoria, descripcion
            FROM productos
            ORDER BY categoria, id
        """).fetchall()
    finally:
        conexion.close()

    categorias = {}

    for producto in productos:
        categoria = producto["categoria"]

        if categoria not in categorias:
            categorias[categoria] = []

        categorias[categoria].append(producto)

    return render_template("index.html", categorias=categorias)

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None

    if request.method == "POST":
        password = request.form.get("password", "")

        if check_password_hash(
            app.config["ADMIN_PASSWORD_HASH"], password
        ):
            session.clear()
            session["admin"] = True
            return redirect(url_for("admin"))

        error = "Contraseña incorrecta."

    return render_template("login.html", error=error)

@app.route("/admin")
def admin():
    if not session.get("admin"):
        return redirect(url_for("login"))

    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row

    try:
        productos = conexion.execute(
            "SELECT id, nombre, precio FROM productos ORDER BY id"
        ).fetchall()
    finally:
        conexion.close()

    return render_template("admin.html", productos=productos)

@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return redirect(url_for("login"))

@app.route("/admin/productos/<int:producto_id>/precio", methods=["POST"])
def actualizar_precio(producto_id):
    if not session.get("admin"):
        return redirect(url_for("login"))

    precio_texto = request.form.get("precio", "").strip()

    try:
        precio = int(precio_texto)
    except ValueError:
        abort(400, description="El precio debe ser un número entero.")

    if precio < 0 or precio > 2147483647:
        abort(400, description="El precio está fuera del rango permitido.")

    conexion = sqlite3.connect(DB_PATH)

    try:
        resultado = conexion.execute(
            "UPDATE productos SET precio = ? WHERE id = ?",
            (precio, producto_id)
        )

        if resultado.rowcount == 0:
            abort(404, description="El producto no existe.")

        conexion.commit()
    finally:
        conexion.close()

    return redirect(url_for("admin"))

