import { readFileSync } from "node:fs";
import { analyze } from "./analyze.js";
import { toSummary } from "./format.js";
import type { RfpResponseItem } from "./types.js";

const defaultPath = "fixtures/rfp-response-assembler.json";

function usage() {
  console.error("Usage: rfp-response-assembler <file> --format <summary|json>");
}

const args = process.argv.slice(2);
const path = args[0] ?? defaultPath;
const format = args.includes("--format") ? args[args.indexOf("--format") + 1] : "summary";

if (!["summary", "json"].includes(format)) {
  usage();
  process.exit(1);
}

try {
  const items = JSON.parse(readFileSync(path, "utf8")) as { items: RfpResponseItem[] };
  const report = analyze(items.items);
  if (format === "json") {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(toSummary(report));
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}
