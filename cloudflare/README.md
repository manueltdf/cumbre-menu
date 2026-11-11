# Prueba aislada en Cloudflare Workers

Este Worker está destinado solo a staging. Se publica como
`cumbre-menu-staging.<tu-subdominio>.workers.dev`, con una base D1 propia y sin
dominio personalizado ni rutas de Pages. No modifica `public/menu.pdf`, el QR,
Cloudflare Pages ni la base `menu.db` local.

## Requisitos

- Node.js y `uv` instalados.
- Una sesión iniciada en la cuenta Cloudflare correcta mediante Wrangler.
- La cuenta debe tener Workers habilitado.

## Preparar y probar localmente

Desde la raíz del repositorio, generar el bundle de código y archivos públicos:

```bash
python cloudflare/build_assets.py
cd cloudflare/worker
uv sync
```

Para `.dev.vars`, generar una contraseña temporal y un hash PBKDF2. No
reutilizar la contraseña del panel real:

```bash
uv run python -c 'from getpass import getpass; from werkzeug.security import generate_password_hash; print(generate_password_hash(getpass("Contraseña temporal: "), method="pbkdf2:sha256:600000"))'
```

Copiar el hash resultante como `ADMIN_PASSWORD_HASH` y usar una clave aleatoria
distinta como `SECRET_KEY`:

```dotenv
SECRET_KEY=una-clave-local-larga-y-aleatoria
ADMIN_PASSWORD_HASH=un-hash-pbkdf2-de-prueba
```

El Worker verifica PBKDF2 con la API Web Crypto de Cloudflare. El Flask local
sigue verificando los hashes de Werkzeug guardados en `.env`.

Aplicar las migraciones a la base local y arrancar el Worker:

```bash
uv run pywrangler d1 migrations apply cumbre-menu-staging --local
uv run pywrangler dev
```

El servidor de Wrangler usa una D1 local independiente. Se puede abrir en
`http://127.0.0.1:8787/`.

## Publicar el Worker de staging ya preparado

La base remota `cumbre-menu-staging` ya está creada y cargada con los 118
productos de prueba. Su ID está configurado en `wrangler.jsonc`. No vuelvas a
crear la base ni a aplicar migraciones remotas.

Desde la raíz del repositorio, generar los archivos públicos; después ir al
directorio del Worker:

```bash
python cloudflare/build_assets.py
cd cloudflare/worker
uv sync
```

Actualizar el hash del archivo privado de secretos fuera del repositorio. El
script conserva la clave `SECRET_KEY`, pide la contraseña sin mostrarla y
reemplaza el hash antiguo por PBKDF2:

```bash
uv run python - <<'PY'
import json
from getpass import getpass
from pathlib import Path
from werkzeug.security import generate_password_hash

archivo = Path.home() / ".cumbre-menu-staging-secrets.json"
datos = json.loads(archivo.read_text(encoding="utf-8"))
password = getpass("Contraseña temporal de staging: ")
if len(password) < 12:
    raise SystemExit("Usá una contraseña de al menos 12 caracteres.")
datos["ADMIN_PASSWORD_HASH"] = generate_password_hash(
    password, method="pbkdf2:sha256:600000"
)
archivo.write_text(json.dumps(datos), encoding="utf-8")
archivo.chmod(0o600)
print("Hash PBKDF2 guardado en el archivo privado.")
PY
```

Desplegar el Worker independiente e incluir esos secretos:

```bash
uv run pywrangler deploy --secrets-file "$HOME/.cumbre-menu-staging-secrets.json"
```

Wrangler mostrará una dirección `workers.dev`. El archivo de configuración no
define dominio personalizado ni rutas, así que el Worker no recibe el tráfico
del QR ni reemplaza la carta de Pages.

## Comprobaciones de staging

- Abrir la dirección `workers.dev` y revisar la carta y sus imágenes.
- Probar `/login` y entrar en `/admin` con la contraseña de staging.
- Cambiar precio y descripción de un producto; comprobar ambos cambios en `/`.
- Cerrar sesión y verificar que `/admin` vuelve a pedir acceso.
- Revisar en Cloudflare Workers > Observability los errores y CPU por solicitud.

La base D1 de staging es independiente. Sus valores provienen del catálogo
versionado; no importar ni vincular una base de producción.
