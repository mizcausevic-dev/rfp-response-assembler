import { analyze } from "../analyze.js";
import { sampleRfpResponseAssembler } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleRfpResponseAssembler, { now: "2026-05-31T23:59:00Z" });

export function summary() {
  const highFindings = report.findingsList.filter((item) => item.severity === "high").length;
  return {
    items: report.items,
    averageCoverage: report.averageCoverage,
    averageEvidenceReuse: report.averageEvidenceReuse,
    averageDifferentiation: report.averageDifferentiation,
    averageSubmissionReadiness: report.averageSubmissionReadiness,
    readyResponsePacks: report.readyResponsePacks,
    blockedResponses: report.blockedResponses,
    averageDraftDays: report.averageDraftDays,
    hoursRecoveredPerQuarter: report.hoursRecoveredPerQuarter,
    highFindings,
    recommendation:
      "Standardize AI, identity, and healthcare response packs first, tighten revenue and FinTech differentiation next, and unblock public-sector ownership before the next RFP cycle."
  };
}

export function responseLane() {
  return sampleRfpResponseAssembler.map((item) => ({
    owner: item.owner,
    buyer: item.buyer,
    responseStage: item.responseStage,
    responseState: item.responseState,
    responseTheme: item.responseTheme,
    operatingQuestion: item.operatingQuestion,
    headlineGap: item.headlineGap,
    nextMove: item.nextMove
  }));
}

export function coverageMatrix() {
  return sampleRfpResponseAssembler.map((item) => ({
    owner: item.owner,
    buyer: item.buyer,
    responseTheme: item.responseTheme,
    coverageScore: item.coverageScore,
    evidenceReuseScore: item.evidenceReuseScore,
    currentPacket: item.currentPacket,
    companyTags: item.companyTags
  }));
}

export function submissionPosture() {
  return sampleRfpResponseAssembler.map((item) => ({
    buyer: item.buyer,
    owner: item.owner,
    submissionReadinessScore: item.submissionReadinessScore,
    differentiationScore: item.differentiationScore,
    draftDays: item.draftDays,
    boardStory: item.boardStory,
    companyTags: item.companyTags,
    relatedSurfaces: item.relatedSurfaces,
    requiredQuestions: item.requiredQuestions
  }));
}

export function riskMap() {
  const order = { high: 0, medium: 1, low: 2, info: 3 } as const;
  return [...report.findingsList].sort((a, b) => order[a.severity] - order[b.severity] || a.code.localeCompare(b.code));
}

export function verification() {
  return [
    "Synthetic RFP data only - no live customer responses, procurement packets, or private deal artifacts are included.",
    "Coverage, evidence-reuse, differentiation, submission-readiness, and draft-day metrics are modeled from the sample response set in this repo.",
    "This surface is read-only and designed to show how Kinetic Gain can package reusable RFP responses as an executive product.",
    "Company tags and related surfaces are synthetic response-design aids rather than audited references.",
    "Every route and packet is reproducible from the included sample export."
  ];
}

export function payload() {
  return {
    generatedAt: report.generatedAt,
    summary: summary(),
    responseLane: responseLane(),
    coverageMatrix: coverageMatrix(),
    submissionPosture: submissionPosture(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleRfpResponseAssembler
  };
}
