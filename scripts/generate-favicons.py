"""Genera los favicons de la marca a partir de src/constants/logo_Navbar.png.

Uso: python3 scripts/generate-favicons.py
Requiere Pillow (pip install Pillow).
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src" / "constants" / "logo_Navbar.png"
PUBLIC = ROOT / "public"

BACKGROUND = (0, 0, 0, 255)
PADDING = 0.10


def build_square(size: int) -> Image.Image:
    logo = Image.open(SOURCE).convert("RGBA")
    inner = int(size * (1 - PADDING * 2))
    ratio = inner / logo.width
    logo = logo.resize((inner, max(1, int(logo.height * ratio))), Image.LANCZOS)

    canvas = Image.new("RGBA", (size, size), BACKGROUND)
    canvas.alpha_composite(logo, ((size - logo.width) // 2, (size - logo.height) // 2))
    return canvas


def main() -> None:
    square = build_square(512)
    square.save(PUBLIC / "favicon.png")

    square.resize((256, 256), Image.LANCZOS).save(
        PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
    )

    build_square(180).save(PUBLIC / "apple-touch-icon.png")

    for name in ("favicon.png", "favicon.ico", "apple-touch-icon.png"):
        path = PUBLIC / name
        print(f"{name}: {path.stat().st_size} bytes")


if __name__ == "__main__":
    main()
