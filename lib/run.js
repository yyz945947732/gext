import fs from 'fs-extra';
import path from 'node:path';

function runTasks(options) {
  const { include = [], exclude = [] } = options;
  const currentDir = process.cwd();

  try {
    fs.accessSync(currentDir, fs.constants.W_OK);
  } catch {
    console.error('❌ You do not have write permission in this directory.');
    process.exit(1);
  }

  fs.readdirSync(currentDir).forEach((file) => {
    const filePath = path.join(currentDir, file);
    let stat;

    try {
      stat = fs.statSync(filePath);
    } catch (err) {
      console.warn(
        `⚠️ Skipping ${file}: Unable to read file stats (${err.message})`,
      );
      return;
    }

    if (!stat.isFile()) return;

    const ext = path.extname(file).slice(1);

    if (!ext) {
      return;
    }
    if (include.length && !include.includes(ext)) {
      return;
    }
    if (exclude.length && exclude.includes(ext)) {
      return;
    }

    const targetDir = path.join(currentDir, ext);
    const targetPath = path.join(targetDir, file);

    try {
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
        console.log(`📁 Created directory: ${targetDir}`);
      }

      if (fs.existsSync(targetPath)) {
        console.warn(`⚠️ File already exists, skipping: ${targetPath}`);
        return;
      }

      fs.renameSync(filePath, targetPath);
      console.log(`✅ Moved ${file} → ${ext}/${file}`);
    } catch (err) {
      console.error(`❌ Failed to move ${file}: ${err.message}`);
    }
  });
}

export default runTasks;
