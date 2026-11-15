"""Copy only public templates and static files into the Worker asset bundle."""

from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[1]
WORKER = ROOT / "cloudflare" / "worker"
DESTINO = WORKER / ".cloudflare-assets"
SRC = WORKER / "src"


def main():
    if DESTINO.exists():
        shutil.rmtree(DESTINO)

    shutil.copytree(ROOT / "templates", DESTINO / "templates")
    shutil.copytree(ROOT / "static", DESTINO / "static")
    shutil.copy2(ROOT / "app.py", SRC / "app.py")
    print(f"Código y assets de staging preparados en {WORKER}")


if __name__ == "__main__":
    main()
