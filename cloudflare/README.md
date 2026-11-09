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

Crear un archivo `.dev.vars` en `cloudflare/worker/` con credenciales solo de
desarrollo. Generar una contraseña temporal y su hash localmente; no reutilizar
la contraseña del panel real:

```bash
uv run python -c 'from getpass import getpass; from werkzeug.security import generate_password_hash; print(generate_password_hash(getpass("Contraseña temporal: ")))'
```

Copiar el hash resultante como `ADMIN_PASSWORD_HASH` y usar una clave aleatoria
distinta como `SECRET_KEY`:

```dotenv
SECRET_KEY=una-clave-local-larga-y-aleatoria
ADMIN_PASSWORD_HASH=un-hash-scrypt-de-prueba
```

Aplicar las migraciones a la base local y arrancar el Worker:

```bash
uv run pywrangler d1 migrations apply cumbre-menu-staging --local
uv run pywrangler dev
```

El servidor local de Wrangler usa una D1 local independiente. Se puede abrir en
`http://127.0.0.1:8787/`.

## Crear y publicar el Worker de staging

1. Desde `cloudflare/worker/`, iniciar sesión en Cloudflare:

   ```bash
   uv run pywrangler login
   ```

2. Crear una base separada para la prueba:

   ```bash
   uv run pywrangler d1 create cumbre-menu-staging
   ```

   Copiar el `database_id` que devuelve el comando en `wrangler.jsonc`, en lugar
   del UUID de ejemplo `00000000-0000-4000-8000-000000000001`.

3. Aplicar el esquema y los datos de prueba del catálogo (los precios y textos
   provienen de `menu_productos.json`, nunca de la base en producción):

   ```bash
   uv run pywrangler d1 migrations apply cumbre-menu-staging --remote
   ```

4. Volver a la raíz del repositorio y preparar los assets; luego volver al
   directorio Worker y cargar secretos exclusivos de staging. Los comandos
   pedirán los valores de forma interactiva; no se guardan en Git:

   ```bash
   cd ../..
   python cloudflare/build_assets.py
   cd cloudflare/worker
   uv run pywrangler secret put SECRET_KEY
   uv run pywrangler secret put ADMIN_PASSWORD_HASH
   ```

5. Desplegar el Worker independiente:

   ```bash
   uv run pywrangler deploy
   ```

   Wrangler mostrará una dirección `workers.dev`. El archivo de configuración
   no define dominio personalizado ni rutas, así que el Worker no recibe el
   tráfico del QR ni reemplaza la carta de Pages.

## Comprobaciones de staging

- Abrir la dirección `workers.dev` y revisar la carta y sus imágenes.
- Probar `/login` y entrar en `/admin` con la contraseña de staging.
- Cambiar precio y descripción de un producto; comprobar ambos cambios en `/`.
- Cerrar sesión y verificar que `/admin` vuelve a pedir acceso.
- Revisar en Cloudflare Workers > Observability los errores y CPU por solicitud.

La base D1 de staging es independiente. Las migraciones sembran valores de prueba
desde el catálogo versionado. No importar ni vincular una base de producción.
