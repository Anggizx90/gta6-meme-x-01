// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: the house reads POST.json from this
// repository, reads the post from X, and judges its first picture and text.
// This program only copies POST.json into the output directory, where the
// gate reads it. It does no network, reads no clock, and writes the same
// bytes on every run.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(
    `could not copy POST.json out of ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
