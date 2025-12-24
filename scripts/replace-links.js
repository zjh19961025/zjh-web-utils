import fs from "fs";
import path from "path";

const DOCS_DIR = path.resolve("docs");

// 只改相对路径（Typedoc 就是这么生成的）
const REPLACEMENTS = [
    ["functions/", "api-functions/"],
];

function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walk(fullPath);
            continue;
        }

        if (!/\.(html|js|json)$/.test(file)) continue;

        let content = fs.readFileSync(fullPath, "utf8");
        let changed = false;

        for (const [from, to] of REPLACEMENTS) {
            if (content.includes(from)) {
                content = content.split(from).join(to);
                changed = true;
            }
        }

        if (changed) {
            fs.writeFileSync(fullPath, content);
            console.log("✔ patched:", fullPath.replace(DOCS_DIR, "docs"));
        }
    }
}

walk(DOCS_DIR);
console.log("✅ Relative links fixed");
