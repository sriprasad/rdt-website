"""
Make white background of RDT_Logo.png transparent.
Requires: pip install Pillow
"""
from PIL import Image

LOGO_PATH = "public/RDT_Logo.png"

def main():
    img = Image.open(LOGO_PATH).convert("RGBA")
    data = img.getdata()
    new_data = []
    # Threshold: pixels this close to white become transparent
    threshold = 250
    for item in data:
        r, g, b, a = item
        if r >= threshold and g >= threshold and b >= threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(LOGO_PATH)
    print(f"Saved {LOGO_PATH} with transparent background.")

if __name__ == "__main__":
    main()
