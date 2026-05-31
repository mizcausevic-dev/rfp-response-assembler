import { mkdirSync, writeFileSync } from "node:fs";
import { toExport } from "../src/analyze.js";
import { sampleRfpResponseAssembler } from "../src/data/sampleVerticalBrief.js";

const clean = sampleRfpResponseAssembler.map((item) => ({
  ...item,
  responseState: "READY" as const,
  coverageScore: Math.max(item.coverageScore, 90),
  evidenceReuseScore: Math.max(item.evidenceReuseScore, 87),
  differentiationScore: Math.max(item.differentiationScore, 84),
  submissionReadinessScore: Math.max(item.submissionReadinessScore, 86),
  draftDays: Math.min(item.draftDays, 4)
}));

mkdirSync("fixtures", { recursive: true });
writeFileSync("fixtures/rfp-response-assembler.json", JSON.stringify(toExport(sampleRfpResponseAssembler), null, 2));
writeFileSync("fixtures/rfp-response-assembler-clean.json", JSON.stringify(toExport(clean), null, 2));
