import type { RfpResponseReport } from "./types.js";

export function toSummary(report: RfpResponseReport) {
  return [
    `Response packs: ${report.items}`,
    `Average coverage: ${report.averageCoverage}`,
    `Average evidence reuse: ${report.averageEvidenceReuse}`,
    `Average differentiation: ${report.averageDifferentiation}`,
    `Average submission readiness: ${report.averageSubmissionReadiness}`,
    `Ready response packs: ${report.readyResponsePacks}`,
    `Blocked responses: ${report.blockedResponses}`,
    `Average draft days: ${report.averageDraftDays}`,
    `Hours recovered per quarter: ${report.hoursRecoveredPerQuarter}`,
    `High findings: ${report.findingsList.filter((item) => item.severity === "high").length}`
  ].join("\n");
}
