const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const SIZES = [480, 800, 1200];
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
    const name = path.basename(file, path.extname(file));
    const rel = path.relative(INPUT_DIR, file);
    result[rel] = { srcset: [], src: '' };

    for (const width of SIZES) {
      const outPath = `${OUTPUT_DIR}/${width}/${rel.replace(/\.(jpg|jpeg|png)$/, '.webp')}`;
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      await sharp(file)
        .resize(width)
        .webp({ quality: 85 })
        .toFile(outPath);

      result[rel].srcset.push(`/${outPath} ${width}w`);
    }

    result[rel].src = `/${OUTPUT_DIR}/800/${rel.replace(/\.(jpg|jpeg|png)$/, '.webp')}`;
  }

  fs.mkdirSync('_data', { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(result, null, 2));
  console.log(`Données écrites dans ${DATA_FILE}`);
})();