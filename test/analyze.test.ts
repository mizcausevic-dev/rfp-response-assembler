import { describe, expect, it } from "vitest";
import { analyze } from "../src/analyze.js";
import { sampleRfpResponseAssembler } from "../src/data/sampleVerticalBrief.js";

describe("analyze", () => {
  it("returns the expected item count", () => {
    const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:40:00Z" });
    expect(report.items).toBe(7);
  });

  it("computes positive response metrics", () => {
    const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:40:00Z" });
    expect(report.averageCoverage).toBeGreaterThan(0);
    expect(report.averageEvidenceReuse).toBeGreaterThan(0);
    expect(report.averageDifferentiation).toBeGreaterThan(0);
    expect(report.averageSubmissionReadiness).toBeGreaterThan(0);
  });

  it("counts ready and blocked response packs", () => {
    const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:40:00Z" });
    expect(report.readyResponsePacks).toBeGreaterThanOrEqual(1);
    expect(report.blockedResponses).toBeGreaterThanOrEqual(1);
  });

  it("emits response quality and ownership findings", () => {
    const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:40:00Z" });
    expect(report.findingsList.some((finding) => finding.code === "reusable-rfp-pack")).toBe(true);
    expect(report.findingsList.some((finding) => ["missing-coverage", "weak-differentiation", "slow-draft-cycle", "blocked-by-ownership"].includes(finding.code))).toBe(true);
  });

  it("rolls up recovered time", () => {
    const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:40:00Z" });
    expect(report.hoursRecoveredPerQuarter).toBeGreaterThan(0);
  });
});
