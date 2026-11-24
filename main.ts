import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laugh Lab: the excuse a robot vacuum gives after eating a sock.
// Angle: deadpan legalism, not hunger and not "no hands" — the vacuum
// enforces a fictional Floor Debris Act, and the lint tray is its courtroom.
// One sentence of setup, one twist at the end. 100-180 characters, inside
// the 1-200 gate. Deterministic: constant text, no input, no network,
// no randomness. Every run writes byte-identical UTF-8 to entry.txt.
const ENTRY = "Under Section 4 of the Floor Debris Act, that sock was loitering unsupervised after midnight. I simply enforced the law \u2014 the lint tray is my courtroom.";
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
