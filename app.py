import os
import re
import sqlite3
from pathlib import Path

from dotenv import load_dotenv
from flask import (
    Flask,
    abort,
    flash,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from flask_wtf.csrf import CSRFProtect
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

@app.template_filter("pesos")
def formato_pesos(valor):
    return f"$ {valor:,}".replace(",", ".")


@app.template_filter("miles")
def separador_miles(valor):
    return f"{valor:,}".replace(",", ".")


ORDEN_CATEGORIAS = (
    "Sándwiches",
    "Hamburguesas",
    "Empanadas",
    "Para picar",
    "Pizzas",
    "Tartas",
    "Platos principales",
    "Truchas",
    "Ensaladas",
    "Pastas",
    "Salsas",
    "Milanesas",
    "Bebidas sin alcohol",
    "Licuados",
    "Mocktails",
    "Tragos de autor",
    "Bebidas con alcohol",
    "Cocktails",
    "Cafetería",
    "Merienda",
    "Postres",
    "Merchandising · Remeras",
    "Merchandising · Gorras",
)

IMAGENES_MERCH = {
    ("Merchandising · Remeras", "Bosque sumergido"): [
        "bosque-sumergido-remera.png",
        "bosque-sumergido-foto-base.png",
    ],
    ("Merchandising · Remeras", "Cerro negro"): [
        "cerro-negro-remera.png",
        "cerro-negro-foto.png",
    ],
    ("Merchandising · Remeras", "Lagunas mellizas"): [
        "lagunas-mellizas-remera.png",
        "lagunas-mellizas-foto.png",
    ],
    ("Merchandising · Remeras", "Cumbre"): [
        "cumbre-remera.png",
        "cumbre-foto.png",
    ],
    ("Merchandising · Gorras", "Piluso"): [
        "piluso-producto.png",
        "piluso-foto.png",
    ],
    ("Merchandising · Gorras", "Vintage"): [
        "vintage-producto.png",
        "vintage-foto.png",
    ],
    ("Merchandising · Gorras", "Trucker"): [
        "trucker-producto.png",
        "trucker-foto.png",
    ],
    ("Merchandising · Gorras", "Polo"): [
        "polo-producto.png",
        "polo-foto.png",
    ],
}

# El orden y la distribución son parte del diseño de la carta. Los productos,
# precios y descripciones siguen viniendo de SQLite.
LAYOUT_CARTA = (
    {
        "id": "sabores-de-montana",
        "numero": "01 / NUESTRA CARTA",
        "titulo": "Sabores de montaña",
        "descripcion": "Sándwiches, hamburguesas y algo para compartir.",
        "tema": "verde",
        "columnas": 2,
        "filas": (
            ("Sándwiches", "Para picar"),
            ("Hamburguesas", "Pizzas"),
            ("Empanadas", "Tartas"),
        ),
    },
    {
        "id": "delicias-locales",
        "numero": "02 / COCINA",
        "titulo": "Delicias locales",
        "descripcion": "Truchas, pastas y clásicos de nuestra cocina.",
        "tema": "verde",
        "columnas": 2,
        "filas": (
            ("Platos principales", "Pastas"),
            ("Truchas", "Salsas"),
            ("Ensaladas", "Milanesas"),
        ),
    },
    {
        "id": "pausa-natural",
        "numero": "03 / BEBIDAS SIN ALCOHOL",
        "titulo": "Una pausa natural",
        "descripcion": "",
        "tema": "tierra",
        "columnas": 3,
        "filas": (("Bebidas sin alcohol", "Licuados", "Mocktails"),),
    },
    {
        "id": "brindar-frente-al-lago",
        "numero": "04 / NUESTRA BARRA",
        "titulo": "Brindar frente al lago",
        "descripcion": "",
        "tema": "tierra",
        "columnas": 2,
        "filas": (
            ("Tragos de autor", "Cocktails"),
            ("Bebidas con alcohol", None),
        ),
    },
    {
        "id": "quedate-un-ratito-mas",
        "numero": "05 / CAFETERÍA & MERIENDA",
        "titulo": "Quedate un ratito más",
        "descripcion": "",
        "tema": "terracota",
        "columnas": 2,
        "filas": (
            ("Cafetería", "Merienda"),
            (None, "Postres"),
        ),
    },
)

SUBTITULOS_CATEGORIA = {
    "Hamburguesas": "Con papas fritas",
    "Empanadas": "3 unidades",
    "Tartas": "Con ensalada",
    "Truchas": "Con papas fritas / vegetales al wok / puré.",
    "Milanesas": "Con papas fritas / vegetales al wok / puré.",
    "Licuados": "Con agua / con leche",
}


@app.route("/")
def inicio():
    conexion = sqlite3.connect(DB_PATH)
    conexion.row_factory = sqlite3.Row

    try:
        productos = conexion.execute("""
            SELECT id, nombre, precio, categoria, descripcion, variante
            FROM productos
            ORDER BY id
        """).fetchall()
    finally:
        conexion.close()

    productos_por_categoria = {}

    for producto in productos:
        categoria = producto["categoria"]
        productos_por_categoria.setdefault(categoria, []).append(producto)

    categorias = {
        categoria: productos_por_categoria.pop(categoria)
        for categoria in ORDEN_CATEGORIAS
        if categoria in productos_por_categoria
    }
    categorias.update(productos_por_categoria)

    categorias_en_layout = {
        categoria
        for bloque in LAYOUT_CARTA
        for fila in bloque["filas"]
        for categoria in fila
        if categoria
    }
    categorias_sin_layout = {
        categoria: productos_categoria
        for categoria, productos_categoria in categorias.items()
        if categoria not in categorias_en_layout
        and not categoria.startswith("Merchandising ·")
    }

    return render_template(
        "index.html",
        categorias=categorias,
        imagenes_merch=IMAGENES_MERCH,
        layout_carta=LAYOUT_CARTA,
        subtitulos_categoria=SUBTITULOS_CATEGORIA,
        categorias_sin_layout=categorias_sin_layout,
    )


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
        productos = conexion.execute("""
            SELECT id, nombre, precio, categoria, descripcion, variante
            FROM productos
            ORDER BY id
        """).fetchall()
    finally:
        conexion.close()

    productos_por_categoria = {}
    for producto in productos:
        productos_por_categoria.setdefault(producto["categoria"], []).append(
            producto
        )

    categorias = {
        categoria: productos_por_categoria.pop(categoria)
        for categoria in ORDEN_CATEGORIAS
        if categoria in productos_por_categoria
    }
    categorias.update(productos_por_categoria)

    return render_template(
        "admin.html",
        categorias=categorias,
        cantidad_productos=len(productos),
    )


@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/admin/productos/<int:producto_id>", methods=["POST"])
def actualizar_producto(producto_id):
    if not session.get("admin"):
        return redirect(url_for("login"))

    precio_texto = request.form.get("precio", "").strip()
    descripcion = request.form.get("descripcion", "").strip()

    if not re.fullmatch(r"(?:\d+|\d{1,3}(?:\.\d{3})+)", precio_texto):
        abort(
            400,
            description=(
                "Ingresá un precio entero, con puntos de miles opcionales."
            ),
        )

    precio = int(precio_texto.replace(".", ""))

    if precio < 0 or precio > 2147483647:
        abort(400, description="El precio está fuera del rango permitido.")

    if len(descripcion) > 2000:
        abort(
            400,
            description="La descripción no puede superar los 2000 caracteres.",
        )

    conexion = sqlite3.connect(DB_PATH)

    try:
        resultado = conexion.execute(
            "UPDATE productos SET precio = ?, descripcion = ? WHERE id = ?",
            (precio, descripcion, producto_id),
        )

        if resultado.rowcount == 0:
            abort(404, description="El producto no existe.")

        conexion.commit()
    finally:
        conexion.close()

    flash("Cambios guardados correctamente.", "success")
    return redirect(url_for("admin"))
