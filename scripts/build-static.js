const fs = require("fs/promises");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const copyTargets = ["index.html", "public"];

async function copyRecursive(source, destination) {
  const stats = await fs.stat(source);

  if (stats.isDirectory()) {
    await fs.mkdir(destination, { recursive: true });
    const entries = await fs.readdir(source);

    for (const entry of entries) {
      await copyRecursive(
        path.join(source, entry),
        path.join(destination, entry)
      );
    }

    return;
  }

  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

async function main() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });

  for (const target of copyTargets) {
    const source = path.join(projectRoot, target);
    const destination = path.join(distDir, target);
    await copyRecursive(source, destination);
  }

  console.log("Static site copied to dist/");
}

main().catch((error) => {
  console.error("Build failed:");
  console.error(error);
  process.exit(1);
});
