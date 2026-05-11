const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const SIZES = [240, 480, 600, 800, 1200];
const INPUT_DIR = 'assets/images';
const OUTPUT_DIR = path.join(INPUT_DIR, 'resized');
const DATA_FILE = '_data/responsive_images.json';

const result = {};

if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}

const files = glob.sync(`${INPUT_DIR}/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}`, {
  ignore: `${OUTPUT_DIR.replace(/\\/g, '/')}/**/*`,
});

(async () => {
  for (const file of files) {
    const rel = path.relative(INPUT_DIR, file);
    const relKey = rel.replace(/\.[^.]+$/, ext => ext.toLowerCase());
    result[relKey] = { srcset: [], src: '' };

    for (const width of SIZES) {
      const outPath = `${OUTPUT_DIR}/${width}/${rel.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`;
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      await sharp(file)
        .resize(width)
        .webp({ quality: 75 })
        .toFile(outPath);

      result[relKey].srcset.push(`/${outPath} ${width}w`);
    }

    result[relKey].src = `/${OUTPUT_DIR}/800/${rel.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`;
  }

  fs.mkdirSync('_data', { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(result, null, 2));
  console.log(`Données écrites dans ${DATA_FILE}`);
})();