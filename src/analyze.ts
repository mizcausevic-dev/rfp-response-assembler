import type { Finding, RfpResponseExport, RfpResponseItem, RfpResponseReport } from "./types.js";

function average(items: RfpResponseItem[], pick: (item: RfpResponseItem) => number) {
  return Math.round(items.reduce((sum, item) => sum + pick(item), 0) / items.length);
}

function evaluate(item: RfpResponseItem): Finding[] {
  const findings: Finding[] = [];

  if (item.responseState === "READY" && item.coverageScore >= 85 && item.submissionReadinessScore >= 80) {
    findings.push({
      code: "reusable-rfp-pack",
      severity: "high",
      sector: item.sector,
      buyer: item.buyer,
      message: "This response pack is strong enough to reuse across new procurement and diligence cycles right now."
    });
  }

  if (item.coverageScore < 78 || item.submissionReadinessScore < 70) {
    findings.push({
      code: "missing-coverage",
      severity: "high",
      sector: item.sector,
      buyer: item.buyer,
      message: "The response pack is still too thin or fragmented, so buyers will keep asking for manual follow-up answers."
    });
  }

  if (item.evidenceReuseScore < 74 || item.differentiationScore < 72) {
    findings.push({
      code: "weak-differentiation",
      severity: "medium",
      sector: item.sector,
      buyer: item.buyer,
      message: "The response pack is not reusable or differentiated enough yet, so the buyer story still feels generic."
    });
  }

  if (item.draftDays > 7) {
    findings.push({
      code: "slow-draft-cycle",
      severity: item.draftDays > 10 ? "high" : "low",
      sector: item.sector,
      buyer: item.buyer,
      message: "Drafting still takes too long, which slows response cycles and weakens buyer confidence."
    });
  }

  if (item.responseState === "BLOCKED") {
    findings.push({
      code: "blocked-by-ownership",
      severity: "high",
      sector: item.sector,
      buyer: item.buyer,
      message: "This response room is blocked by missing ownership or packaging, so the buyer path cannot move cleanly."
    });
  }

  return findings;
}

export function analyze(items: RfpResponseItem[], options: { now?: string } = {}): RfpResponseReport {
  const generatedAt = options.now ?? new Date().toISOString();
  const findingsList = items.flatMap((item) => evaluate(item));
  const readyResponsePacks = items.filter((item) => item.responseState === "READY").length;
  const blockedResponses = items.filter((item) => item.responseState === "BLOCKED").length;
  const averageDraftDays = Number((items.reduce((sum, item) => sum + item.draftDays, 0) / items.length).toFixed(1));

  return {
    generatedAt,
    items: items.length,
    averageCoverage: average(items, (item) => item.coverageScore),
    averageEvidenceReuse: average(items, (item) => item.evidenceReuseScore),
    averageDifferentiation: average(items, (item) => item.differentiationScore),
    averageSubmissionReadiness: average(items, (item) => item.submissionReadinessScore),
    readyResponsePacks,
    blockedResponses,
    averageDraftDays,
    hoursRecoveredPerQuarter: readyResponsePacks * 22 + items.filter((item) => item.draftDays > 7).length * 12,
    findingsList,
    ok: findingsList.filter((item) => item.severity === "high").length <= items.length
  };
}

export function toExport(items: RfpResponseItem[], now?: string): RfpResponseExport {
  return {
    generatedAt: now ?? new Date().toISOString(),
    items
  };
}
