export type RfpSector =
  | "AI_PLATFORM"
  | "CLOUD_IDENTITY"
  | "REVENUE_SYSTEMS"
  | "FINTECH"
  | "BIOTECH_DIAGNOSTICS"
  | "GOVTECH_PUBLIC_SECTOR"
  | "HEALTHTECH";

export type ResponseStage = "DISCOVERY" | "DRAFTING" | "LEGAL_REVIEW" | "SUBMISSION_READY";

export type ResponseState = "READY" | "NEEDS_WORK" | "BLOCKED";

export interface RfpResponseItem {
  id: string;
  owner: string;
  buyer: string;
  sector: RfpSector;
  responseStage: ResponseStage;
  responseState: ResponseState;
  responseTheme: string;
  operatingQuestion: string;
  currentPacket: string;
  headlineGap: string;
  coverageScore: number;
  evidenceReuseScore: number;
  differentiationScore: number;
  submissionReadinessScore: number;
  draftDays: number;
  boardStory: string;
  nextMove: string;
  companyTags: string[];
  relatedSurfaces: string[];
  requiredQuestions: string[];
}

export interface RfpResponseExport {
  generatedAt: string;
  items: RfpResponseItem[];
}

export type FindingCode =
  | "reusable-rfp-pack"
  | "missing-coverage"
  | "weak-differentiation"
  | "slow-draft-cycle"
  | "blocked-by-ownership";

export interface Finding {
  code: FindingCode;
  severity: "high" | "medium" | "low" | "info";
  sector: RfpSector;
  buyer: string;
  message: string;
}

export interface RfpResponseReport {
  generatedAt: string;
  items: number;
  averageCoverage: number;
  averageEvidenceReuse: number;
  averageDifferentiation: number;
  averageSubmissionReadiness: number;
  readyResponsePacks: number;
  blockedResponses: number;
  averageDraftDays: number;
  hoursRecoveredPerQuarter: number;
  findingsList: Finding[];
  ok: boolean;
}
