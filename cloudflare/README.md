# Despliegue en Cloudflare

El Worker `cumbre-menu` sirve la carta y el panel de administración en
https://cumbretraful.com/ (también conserva
https://cumbre-menu.manuvinfo.workers.dev/) y utiliza la base D1
`cumbre-menu-production`. Su configuración está en
`cloudflare/worker/wrangler.production.jsonc`.

## Preparar los assets

Desde la raíz del repositorio:

```bash
python3 cloudflare/build_assets.py
cd cloudflare/worker
uv sync
```

El script copia `app.py`, las plantillas y los archivos estáticos a la carpeta
que el Worker publica. No modifica los datos de D1.

## Desplegar en producción

Revisá el nombre del Worker y el ID de D1 antes de desplegar:

```bash
uv run pywrangler deploy --dry-run --config wrangler.production.jsonc
```

Si el resultado es correcto y querés publicar esos cambios en la web activa:

```bash
uv run pywrangler deploy --config wrangler.production.jsonc
```

No ejecutes migraciones remotas de D1 como parte de un despliegue habitual.
Antes de modificar el esquema, prepará una copia y revisá la migración
específica para cada base.

## Secretos y acceso de administración

El Worker lee `SECRET_KEY` y `ADMIN_PASSWORD_HASH` de los secretos
configurados en Cloudflare. El despliegue habitual conserva ambos valores.

## QR y Cloudflare Pages

El QR impreso no se regenera: contiene
`https://cumbre-menu.pages.dev/menu.pdf`. El proyecto Pages `cumbre-menu`
se conserva como puente de compatibilidad. Las reglas de
`public/_redirects` redirigen `/menu.pdf` y `/` al dominio canónico
https://cumbretraful.com/. El PDF y la página anterior ya no se sirven.

No borres el proyecto Pages ni `public/_redirects` mientras se use el QR
impreso. Si cambia el dominio del Worker, actualizá las redirecciones.

## Desarrollo local

`uv run pywrangler dev --local --config wrangler.production.jsonc` ejecuta
el Worker con una base D1 local para desarrollo.
