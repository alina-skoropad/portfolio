import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/projects/locast";
const outputDir = "public/images/projects/locast";

const breakpoints = [320, 480, 768, 1024, 1280, 1920, 2560];
const formats = ["jpg", "webp"];
const sourceFiles = fs.readdirSync(inputDir).filter(
  (file) => !/-\d+w\.(jpg|webp)$/i.test(file)
);

const generateImages = async () => {
  const tasks = sourceFiles.flatMap((file) => {
    const base = path.basename(file, path.extname(file));

    return breakpoints.flatMap((bp) =>
      formats.map(async (format) => {
        const outPath = path.join(outputDir, `${base}-${bp}w.${format}`);
        await sharp(path.join(inputDir, file))
          .resize(bp)
          .toFormat(format, { quality: 80 })
          .toFile(outPath);
        console.log("Generated:", outPath);
      })
    );
  });

  await Promise.all(tasks);
};

generateImages().catch((error) => {
  console.error("Image generation failed:", error);
  process.exitCode = 1;
});