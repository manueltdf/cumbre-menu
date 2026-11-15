# Carta web de Cumbre Restobar

La carta del Worker está publicada y activa como producción. Se promovió en el
mismo Worker que antes se usaba para staging, para conservar su código, la
base de datos y los secretos existentes.

- URL pública actual: https://cumbre-menu-staging.manuvinfo.workers.dev/
- El Worker conserva el nombre técnico `cumbre-menu-staging`; por eso ese
  sufijo sigue apareciendo en la URL.
- La base D1 actual contiene los 118 productos y conserva su identificador.
  No volver a crearla, borrarla ni aplicar migraciones remotas sin preparar
  primero una copia y revisar el cambio.
- Los secretos están guardados en Cloudflare. No imprimirlos ni subirlos a Git.
  Cambiar el hash de administrador solo desde el archivo privado local.

## QR existente y Pages

El QR impreso no se regenera. Su URL original entra por
`https://cumbre-menu.pages.dev/menu.pdf`. Cloudflare Pages conserva solo las
redirecciones de la portada y de esa ruta al Worker. El PDF y su antigua página
ya se eliminaron del despliegue.

No borrar el proyecto Pages ni el archivo `public/_redirects`: son la ruta de
compatibilidad que permite que el QR existente siga abriendo la carta nueva.

## Preparar un despliegue futuro

Desde la raíz del repositorio:

```bash
python3 cloudflare/build_assets.py
cd cloudflare/worker
uv sync
```

El Worker y su archivo Wrangler siguen usando el nombre técnico histórico
`cumbre-menu-staging`. El valor `CUMBRE_ENV` debe permanecer en
`production`; si vuelve a `staging`, la aplicación volverá a enviar
`X-Robots-Tag: noindex, nofollow`.

Antes de desplegar, asegurarse de que el archivo privado de secretos contiene
la contraseña de administrador que se quiere usar. No compartir ese archivo ni
sus valores en GitHub o en el chat. Desplegar el mismo Worker con:

```bash
uv run pywrangler deploy --secrets-file "$HOME/.cumbre-menu-staging-secrets.json"
```

El archivo de secretos conserva su nombre histórico. Wrangler actualiza solo
los valores incluidos y mantiene los secretos remotos que no se incluyan.

## Desarrollo local

El comando `uv run pywrangler dev` usa una base D1 local independiente.
No apuntar desarrollo local a la base remota de producción.
