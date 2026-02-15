/**
 * Make white background of RDT_Logo.png transparent.
 * Run: node scripts/remove-logo-background.mjs
 */
const Jimp = (await import("jimp")).default;

const LOGO_PATH = "public/RDT_Logo.png";
const WHITE_THRESHOLD = 250;

async function main() {
  const img = await Jimp.read(LOGO_PATH);
  if (img.hasAlpha()) {
    // ensure we have alpha channel to modify
  } else {
    img.rgba(false);
  }

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await img.writeAsync(LOGO_PATH);
  console.log("Saved", LOGO_PATH, "with transparent background.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
