from pathlib import Path
import qrcode

#1. direccion publica menu
URL_MENU = "https://cumbre-menu.pages.dev/menu.pdf"

#2 config QR
qr = qrcode.QRCode(
version=None,
error_correction=qrcode.constants.ERROR_CORRECT_H,
box_size=20,
border=4,
)

#3 codificar URL
qr.add_data(URL_MENU)
qr.make(fit=True)

#4 generar imagen
image = qr.make_image(
fill_color="green",
back_color="white"
)

#5 guardar PNG
output = Path(__file__).resolve().parent / "menu_qr.png"
image.save(output)

#6 mostrar resultado
print(f"QR generado: {output}")
print(f"URL codificada: {URL_MENU}")

