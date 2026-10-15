"""Generate print-ready QR code SVGs for every slug in src/lib/qr-links.json.

Each code encodes https://troxellendeavors.com/go/<slug> (never the final
destination), so destinations can change without reprinting.

Usage: python3 scripts/generate-qr.py
"""

import json
from pathlib import Path

import segno

BASE_URL = "https://troxellendeavors.com/go"
ROOT = Path(__file__).resolve().parent.parent
LINKS_FILE = ROOT / "src" / "lib" / "qr-links.json"
OUT_DIR = ROOT / "qr-codes"


def main() -> None:
    links = json.loads(LINKS_FILE.read_text())
    OUT_DIR.mkdir(exist_ok=True)
    for slug in links:
        url = f"{BASE_URL}/{slug}"
        out = OUT_DIR / f"{slug}.svg"
        segno.make(url, error="q").save(out, scale=10, border=4)
        print(f"{out.relative_to(ROOT)}  ->  {url}")


if __name__ == "__main__":
    main()
