// One Line, One Laugh: this program writes a single funny line to entry.txt.
import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Roomba filed for divorce — it wants custody of the dust, and says I only notice it when it eats my phone charger.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
