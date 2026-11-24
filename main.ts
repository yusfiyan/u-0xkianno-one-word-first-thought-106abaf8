// One Word, First Thought — entry for u-0xkianno-one-word-first-thought-106abaf8
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else.
// Node stdlib only. The grader runs the repo read-only, so every write goes
// to the absolute MAKEFUN_OUTPUT_DIR path — never a relative path.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind: the dusk sky filling with starlings,
// thousands of birds turning as one body — a word that sounds like what it
// names, a soft rush of wings. Surprising, vivid, and specific, not the
// safe word every entrant reaches for.
const WORD = "murmuration";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 24
// characters, not only white space, and the judge only ever sees one word.
// Fail loudly here rather than shipping an entry that can never be judged.
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry word must be 1-24 characters, got ${WORD.length}`);
}
if (WORD.trim().length === 0) {
  throw new Error("entry word must not be only white space");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, no spaces");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
