import * as fs from "node:fs";

// 347: odd, specific, believable chronic tab-hoarder count across
// a few windows — not a round number, not an absurd shock number.
const TABS = 347;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", String(TABS), "utf8");
