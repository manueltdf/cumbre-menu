"""Carga el catálogo del PDF sin sobrescribir los productos existentes.

Ejecutar desde el proyecto: python iniciar_db.py
No requiere dependencias externas. La base y el JSON se buscan junto al script.
"""
import json
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "menu.db"
CATALOGO_PATH = BASE_DIR / "menu_productos.json"


def clave(producto):
    """Una presentación se identifica por categoría, nombre y variante."""
    return tuple(
        " ".join(producto[campo].split()).casefold()
        for campo in ("categoria", "nombre", "variante")
    )


def leer_catalogo():
    contenido = json.loads(CATALOGO_PATH.read_text(encoding="utf-8"))
    productos = contenido["productos"]
    if not isinstance(productos, list) or not productos:
        raise ValueError("El catálogo debe contener una lista de productos.")
    vistas = set()
    for numero, producto in enumerate(productos, start=1):
        for campo in ("nombre", "categoria", "descripcion", "variante"):
            if not isinstance(producto.get(campo), str):
                raise ValueError(f"Producto {numero}: falta el texto {campo}.")
        if not producto["nombre"].strip() or not producto["categoria"].strip():
            raise ValueError(f"Producto {numero}: nombre o categoría vacíos.")
        precio = producto.get("precio")
        if type(precio) is not int or not 0 <= precio <= 2147483647:
            raise ValueError(f"Producto {numero}: precio inválido.")
        identidad = clave(producto)
        if identidad in vistas:
            raise ValueError(f"Producto repetido en el catálogo: {identidad}")
        vistas.add(identidad)
    return productos


def main():
    # Validar todos los datos antes de abrir o modificar la base.
    productos = leer_catalogo()
    existia = DB_PATH.exists()
    conexion = sqlite3.connect(DB_PATH, timeout=15)
    conexion.row_factory = sqlite3.Row

    try:
        if existia:
            # backup() también captura cambios que estén en el WAL de SQLite.
            fecha = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S%fZ")
            respaldo = DB_PATH.with_name(f"menu.db-backup-{fecha}")
            destino = sqlite3.connect(respaldo)
            try:
                conexion.backup(destino)
            finally:
                destino.close()
            print(f"Copia de respaldo: {respaldo.name}")

        # Una sola transacción para estructura y filas: todo o nada.
        conexion.execute("BEGIN IMMEDIATE")
        conexion.execute("""
            CREATE TABLE IF NOT EXISTS productos (
                id INTEGER PRIMARY KEY,
                nombre TEXT NOT NULL,
                precio INTEGER NOT NULL CHECK (precio >= 0),
                categoria TEXT NOT NULL DEFAULT 'Sin categoría',
                descripcion TEXT NOT NULL DEFAULT '',
                variante TEXT NOT NULL DEFAULT ''
            )
        """)

        columnas = {
            fila["name"]
            for fila in conexion.execute("PRAGMA table_info(productos)")
        }
        if not {"id", "nombre", "precio"}.issubset(columnas):
            raise ValueError("La tabla productos no tiene la estructura esperada.")

        if "categoria" not in columnas:
            conexion.execute("""
                ALTER TABLE productos
                ADD COLUMN categoria TEXT NOT NULL DEFAULT 'Sin categoría'
            """)
        if "descripcion" not in columnas:
            conexion.execute("""
                ALTER TABLE productos
                ADD COLUMN descripcion TEXT NOT NULL DEFAULT ''
            """)
        if "variante" not in columnas:
            conexion.execute("""
                ALTER TABLE productos
                ADD COLUMN variante TEXT NOT NULL DEFAULT ''
            """)

        existentes = {}
        for fila in conexion.execute("SELECT * FROM productos"):
            identidad = clave(fila)
            if identidad in existentes:
                raise ValueError(
                    f"Hay productos duplicados en la base: {identidad}. "
                    "No se realizaron cambios."
                )
            existentes[identidad] = fila["id"]

        nuevos = 0
        conservados = 0
        # Mantener los primeros tres IDs del tutorial en una base nueva.
        primeros = {
            ("sándwiches", "tostado de campo", ""): 0,
            ("sándwiches", "bagle de trucha", ""): 1,
            ("para picar", "papas fritas", ""): 2,
        }
        ordenados = sorted(productos, key=lambda p: primeros.get(clave(p), 3))
        for producto in ordenados:
            identidad = clave(producto)
            if identidad in existentes:
                # No cambiar IDs, precios, descripciones ni ningún dato existente.
                conservados += 1
                continue
            conexion.execute("""
                INSERT INTO productos
                    (nombre, precio, categoria, descripcion, variante)
                VALUES (?, ?, ?, ?, ?)
            """, (
                producto["nombre"], producto["precio"], producto["categoria"],
                producto["descripcion"], producto["variante"]
            ))
            nuevos += 1

        total = conexion.execute("SELECT COUNT(*) FROM productos").fetchone()[0]
        conexion.commit()
    except BaseException:
        conexion.rollback()
        raise
    finally:
        conexion.close()

    print(f"Productos del catálogo: {len(productos)}")
    print(f"Nuevos: {nuevos}")
    print(f"Existentes conservados: {conservados}")
    print(f"Total en la base: {total}")
    print("Carga completada. Los precios existentes se conservaron.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError, TypeError, sqlite3.Error) as error:
        raise SystemExit(f"No se completó la carga: {error}") from error
