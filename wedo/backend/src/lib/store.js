import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "data");

export function dataPath(fileName) {
  return path.join(DATA_DIR, fileName);
}

export async function readJson(fileName) {
  const raw = await readFile(dataPath(fileName), "utf-8");
  return JSON.parse(raw);
}

export async function writeJson(fileName, value) {
  await writeFile(dataPath(fileName), JSON.stringify(value, null, 2), "utf-8");
}
