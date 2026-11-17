# Despliegue en Cloudflare

La aplicación se ejecuta en dos Workers independientes. Cada uno tiene su
propia base D1 y sus propios secretos en Cloudflare.

| Entorno | Worker | URL actual | Base D1 | `CUMBRE_ENV` |
| --- | --- | --- | --- | --- |
| Producción | `cumbre-menu` | https://cumbre-menu.manuvinfo.workers.dev/ | `cumbre-menu-production` | `production` |
| Staging | `cumbre-menu-staging` | https://cumbre-menu-staging.manuvinfo.workers.dev/ | `cumbre-menu-staging` | `staging` |

Los archivos de configuración son explícitos:

- `cloudflare/worker/wrangler.production.jsonc` apunta al Worker y a la base D1 de producción.
- `cloudflare/worker/wrangler.jsonc` apunta al Worker y a la base D1 de staging.

Elegí siempre el archivo adecuado con `--config`. No despliegues producción
con `wrangler.jsonc`: ese archivo es exclusivamente para staging.

## Preparar los assets

Desde la raíz del repositorio:

```bash
python3 cloudflare/build_assets.py
cd cloudflare/worker
uv sync
```

El script copia `app.py`, las plantillas y los archivos estáticos a la carpeta
que el Worker publica. No modifica los datos de D1.

## Desplegar en staging

Primero revisá el paquete con un despliegue de prueba:

```bash
uv run pywrangler deploy --dry-run --config wrangler.jsonc
```

Si el resultado es correcto, desplegá solo en staging:

```bash
uv run pywrangler deploy --config wrangler.jsonc
```

## Desplegar en producción

La producción usa otra configuración, otro Worker y otra base. Revisá con
especial cuidado el nombre `cumbre-menu` y el ID de D1 antes de desplegar:

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

Los Workers mantienen sus secretos en Cloudflare; los valores no se guardan en
Git. Cada entorno tiene las vinculaciones `SECRET_KEY` y
`ADMIN_PASSWORD_HASH`. Un despliegue normal sin `--secrets-file` no requiere
volver a cargar esos valores. No uses un archivo de secretos de staging para
desplegar en producción. Para rotar secretos, hacelo de forma explícita sobre
el Worker elegido y nunca publiques los valores.

## QR y Cloudflare Pages

El QR existente no se regenera. Sigue apuntando a
`https://cumbre-menu.pages.dev/menu.pdf`; el proyecto Pages conserva
redirecciones de `/menu.pdf` y `/` hacia el Worker de producción. El PDF y
la página anterior ya no se sirven.

No borres el proyecto Pages ni `public/_redirects`: son el puente que
mantiene operativo el QR impreso. Si cambia la URL del Worker, actualizá las
redirecciones antes de retirar la dirección anterior.

## Desarrollo local

`uv run pywrangler dev --config wrangler.jsonc` usa la base D1 local de
staging, independiente de la base remota. No configures desarrollo local para
escribir en la base remota de producción.
