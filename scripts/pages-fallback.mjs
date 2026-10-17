import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roots = [".output/public", "dist/client", "dist"];

let wrote = false;
for (const root of roots) {
  const indexPath = join(root, "index.html");
  if (!existsSync(indexPath)) continue;
  const shellPath = join(root, "_shell.html");
  const fallbackSource = existsSync(shellPath) ? shellPath : indexPath;
  copyFileSync(fallbackSource, join(root, "404.html"));
  writeFileSync(join(root, ".nojekyll"), "");
  console.log(`Wrote ${join(root, "404.html")} from ${fallbackSource}`);
  wrote = true;
}

if (!wrote) {
  console.error("pages-fallback: no index.html found in .output/public, dist/client, or dist");
  process.exit(1);
}
