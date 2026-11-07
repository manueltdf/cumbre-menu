import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "menu.db"

conexion = sqlite3.connect(DB_PATH)

try:
    conexion.execute("""
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY,
            nombre TEXT NOT NULL,
            precio INTEGER NOT NULL CHECK (precio >= 0)
        )
    """)

    conexion.executemany("""
        INSERT INTO productos (id, nombre, precio)
        VALUES (?, ?, ?)
        ON CONFLICT(id) DO NOTHING
    """, [
        (1, "Tostado de campo", 21000),
        (2, "Bagle de trucha", 24000),
        (3, "Papas fritas", 18000)
    ])

    conexion.commit()
finally:
    conexion.close()

print(f"Base de datos preparada: {DB_PATH}")
