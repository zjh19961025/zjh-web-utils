import fs from "fs";
import path from "path";

const DOCS_DIR = path.resolve("docs");
const FROM = path.join(DOCS_DIR, "functions");
const TO = path.join(DOCS_DIR, "api-functions");

if (fs.existsSync(FROM)) {
    if (fs.existsSync(TO)) {
        fs.rmSync(TO, { recursive: true, force: true });
    }
    fs.renameSync(FROM, TO);
    console.log("✔ renamed docs/functions → docs/api-functions");
} else {
    console.log("ℹ docs/functions not found, skip");
}
