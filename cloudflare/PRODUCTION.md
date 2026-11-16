# Producción separada

Configuración de producción: `cloudflare/worker/wrangler.production.jsonc`.
Worker: `cumbre-menu`. Base: `cumbre-menu-production`.

La base de producción se creó con una copia exacta de los 118 productos de la base anterior. No ejecutar las migraciones de carga inicial sobre esta base.

## Primer despliegue desde Linux

Desde la raíz del proyecto:

```bash
python3 cloudflare/build_assets.py
cd cloudflare/worker
uv sync
uv run pywrangler deploy --config wrangler.production.jsonc --secrets-file "$HOME/.cumbre-menu-staging-secrets.json"
```

El archivo privado existente se usa para mantener el acceso del administrador. No subirlo al repositorio.

## Cambio de tráfico pendiente

Comprobar la nueva URL devuelta por Wrangler, los tres idiomas, imágenes, login y edición de productos. Después cambiar la redirección del QR y convertir el Worker anterior en staging real (CUMBRE_ENV=staging). Hasta entonces, el Worker anterior sigue atendiendo clientes; no usarlo para pruebas de escritura ni cambiar sus redirecciones.

Las bases ya son independientes: las ediciones posteriores a la copia no se sincronizan automáticamente. Evitar editar el catálogo durante el cambio de tráfico o repetir una sincronización controlada antes del cambio.

La dirección con dominio del restaurante se configura después, por separado.
