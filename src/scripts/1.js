import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/projects/t2w"; 
const outputDir = "public/images/projects/t2w";

const breakpoints = [320, 480, 768, 1024, 1280, 1920, 2560];
const formats = ["jpg", "webp"];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);

  breakpoints.forEach((bp) => {
    formats.forEach(async (format) => {
      const outPath = path.join(outputDir, `${base}-${bp}w.${format}`);
      await sharp(path.join(inputDir, file))
        .resize(bp)
        .toFormat(format, { quality: 80 })
        .toFile(outPath);
      console.log("Generated:", outPath);
    });
  });
});