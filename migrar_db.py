import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "menu.db"

if not DB_PATH.is_file():
    raise SystemExit("Primero ejecutá iniciar_db.py para crear la base.")

conexion = sqlite3.connect(DB_PATH)

try:
    columnas = {
        fila[1]
        for fila in conexion.execute("PRAGMA table_info(productos)")
    }

    if not columnas:
        raise SystemExit("No existe la tabla productos.")

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

    conexion.commit()
finally:
    conexion.close()

print("Migración completada.")