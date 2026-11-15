CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    precio INTEGER NOT NULL CHECK (precio >= 0),
    categoria TEXT NOT NULL DEFAULT 'Sin categoría',
    descripcion TEXT NOT NULL DEFAULT '',
    variante TEXT NOT NULL DEFAULT ''
);
