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
            precio INTEGER NOT NULL CHECK (precio >= 0),
            categoria TEXT NOT NULL DEFAULT 'Sin categoría',
            descripcion TEXT NOT NULL DEFAULT ''
        )
    """)

    conexion.executemany("""
        INSERT INTO productos (
            id, nombre, precio, categoria, descripcion
        )
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(id) DO NOTHING
    """, [
        (
            1,
            "Tostado de campo",
            21000,
            "Sándwiches",
            "2 u. pan casero, jamón, queso pategrás y parmesano gratinado."
        ),
        (
            2,
            "Bagle de trucha",
            24000,
            "Sándwiches",
            "Queso crema, ciboulette, rúcula y trucha ahumada."
        ),
        (
            3,
            "Papas fritas",
            18000,
            "Para picar",
            ""
        )
    ])

    conexion.executemany("""
        UPDATE productos
        SET categoria = ?
        WHERE id = ? AND categoria = 'Sin categoría'
    """, [
        ("Sándwiches", 1),
        ("Sándwiches", 2),
        ("Para picar", 3)
    ])

    conexion.executemany("""
        UPDATE productos
        SET descripcion = ?
        WHERE id = ? AND descripcion = ''
    """, [
        (
            "2 u. pan casero, jamón, queso pategrás y parmesano gratinado.",
            1
        ),
        (
            "Queso crema, ciboulette, rúcula y trucha ahumada.",
            2
        )
    ])

    conexion.commit()
finally:
    conexion.close()

print(f"Base de datos preparada: {DB_PATH}")