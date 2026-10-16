"""Render the first PDF page of each catalogue certificate; needs Poppler and Pillow."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import json
import re
import subprocess
import tempfile
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
CATALOGUE = ROOT / 'src/app/data/certificates.ts'
OUTPUT = ROOT / 'public/images/certificates/previews'
MANIFEST = ROOT / 'src/app/data/certificate-previews.json'


def main():
    entries = re.findall(r'id:\s*(\d+),.*?pdfLink:\s*"([^"]+)"', CATALOGUE.read_text(), re.S)
    if not entries:
        raise ValueError('No certificate PDFs found in catalogue')
    OUTPUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='certificate-previews-') as scratch:
        def render(entry):
            cert_id, url = entry
            prefix = Path(scratch) / f'certificate-{cert_id}'
            subprocess.run(['pdftoppm', '-f', '1', '-singlefile', '-scale-to', '1200',
                            '-png', str(ROOT / 'public' / url.lstrip('/')), str(prefix)], check=True)
            with Image.open(str(prefix) + '.png') as image:
                image = image.convert('RGB')
                # Portrait source pages can have large unused margins. Crop only
                # those empty margins in the preview; the original PDF is untouched.
                if image.height > image.width:
                    difference = ImageChops.difference(image, Image.new('RGB', image.size, 'white'))
                    ink = difference.convert('L').point(lambda value: 255 if value > 12 else 0)
                    bounds = ink.getbbox()
                    if bounds:
                        left, top, right, bottom = bounds
                        image = image.crop((max(0, left - 18), max(0, top - 18),
                                            min(image.width, right + 18), min(image.height, bottom + 18)))
                name = f'certificate-{cert_id}.webp' 
                image.save(OUTPUT / name, 'WEBP', quality=85, method=6)
                return cert_id, {'src': f'/images/certificates/previews/{name}',
                                 'width': image.width, 'height': image.height}
        with ThreadPoolExecutor(max_workers=4) as pool:
            manifest = dict(pool.map(render, entries))
    MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n')
    print(f'Rendered {len(manifest)} certificate previews')


if __name__ == '__main__':
    main()
