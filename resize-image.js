import fs from "fs";
import path from "path";
import sharp from "sharp";

// const inputFolder = path.join("./src/assets/images/Drawings/Sketch");
const inputFolder = path.join("./src/assets/images/Drawings/Digital");
const outputFolder = path.join(inputFolder, "Downscaled");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const files = fs.readdirSync(inputFolder);

for (const file of files) {
  const inputPath = path.join(inputFolder, file);

  if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;

  const outputPath = path.join(
    outputFolder,
    file.endsWith(".png") ? file : file.replace(/\.\w+$/, ".webp")
  );

  const image = sharp(inputPath).resize({ width: 1080, withoutEnlargement: true }).rotate();

  if (file.endsWith(".png")) {
    image.png({ quality: 80 });
  } else {
    image.webp({ quality: 80 });
  }

  await image.toFile(outputPath)
    .then(() => console.log(`Finished: ${file}`))
    .catch(err => console.error(`Failed: ${file}`, err));
}
