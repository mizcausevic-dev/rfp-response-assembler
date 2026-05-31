import type { RfpResponseItem } from "../types.js";

export const sampleRfpResponseAssembler: RfpResponseItem[] = [
  {
    "id": "kg-suite-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "AI_PLATFORM",
    "responseStage": "SUBMISSION_READY",
    "responseState": "READY",
    "responseTheme": "Open JSON specs + canonical hashing + ed25519 signing for the AI procurement era",
    "operatingQuestion": "Can we point a buyer at one spec suite plus signing-key URL plus audit-stream and answer the procurement question without bespoke prep?",
    "currentPacket": "Eleven open specs published; hash-attestation-rs ships ed25519 signing; audit-stream-py + audit-stream-prometheus feed the same canonical hash chain; 9 of 11 specs have spec landings; all aligned with NIST AI RMF crosswalk.",
    "headlineGap": "Public adoption telemetry (who-uses-it) is thinner than the spec depth itself — Pulse fills part of this; vendor adoption badges are still missing.",
    "coverageScore": 92,
    "evidenceReuseScore": 92,
    "differentiationScore": 78,
    "submissionReadinessScore": 89,
    "draftDays": 2,
    "boardStory": "Spec authority compounds when buyers can verify provenance without trusting our marketing copy.",
    "nextMove": "Ship vendor-adoption badges + spec-use scorecard sourced from procurement-pulse-engine universe.csv",
    "companyTags": [
      "IBM",
      "Azure",
      "OpenAI",
      "MCP"
    ],
    "relatedSurfaces": [
      "suite.kineticgain.com",
      "aeo.kineticgain.com",
      "validator.kineticgain.com"
    ],
    "requiredQuestions": [
      "Open JSON spec",
      "Canonical hash + ed25519 signing",
      "Tamper-evident audit stream",
      "NIST AI RMF crosswalk"
    ]
  },
  {
    "id": "ai-procurement-pulse-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "AI_PLATFORM",
    "responseStage": "SUBMISSION_READY",
    "responseState": "READY",
    "responseTheme": "Quarterly ed25519-signed crawl of 1,457 domains across 38 verticals scoring AI-procurement disclosure depth",
    "operatingQuestion": "Can we hand a buyer a public, signed measurement of the industry instead of self-report claims?",
    "currentPacket": "4 published Issues; signing-key indexed at /.well-known/pulse-signing.json; universe.csv at 1,457 domains; scheduled quarterly Action committed for Aug/Nov/Feb/May 15; summarizer auto-drafts Issue body.",
    "headlineGap": "Per-vertical sub-issues would compound buyer signal — currently a single combined report per quarter.",
    "coverageScore": 95,
    "evidenceReuseScore": 90,
    "differentiationScore": 95,
    "submissionReadinessScore": 92,
    "draftDays": 1,
    "boardStory": "A measurement product becomes the cheapest moat — competitors cannot fake quarterly signed data.",
    "nextMove": "Draft an interim between-issues spotlight for one vertical (HealthTech or FinTech) using the existing summarizer.",
    "companyTags": [
      "GitHub",
      "Azure",
      "OpenAI",
      "Stripe"
    ],
    "relatedSurfaces": [
      "pulse.kineticgain.com"
    ],
    "requiredQuestions": [
      "Quarterly cadence (Aug/Nov/Feb/May 15)",
      "ed25519-signed",
      "Public universe.csv",
      "Pulse self-score Action available"
    ]
  },
  {
    "id": "operator-diagnostics-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "REVENUE_SYSTEMS",
    "responseStage": "SUBMISSION_READY",
    "responseState": "READY",
    "responseTheme": "Four operator surfaces distinct from /trust/ governance and /calculators/ rubric math",
    "operatingQuestion": "Can a CFO or CRO open one of these surfaces and answer their operator question without a custom build?",
    "currentPacket": "4 surfaces shipped to v1.0-prod 2026-05-31 (reality, revenue, replace, members); each is a Style01 dark-themed dashboard with synthetic operator data.",
    "headlineGap": "Net-new lane after archiving 10 exec-family duplicates — buyer signal not yet collected for which of the 4 has highest pull-through.",
    "coverageScore": 84,
    "evidenceReuseScore": 82,
    "differentiationScore": 72,
    "submissionReadinessScore": 80,
    "draftDays": 4,
    "boardStory": "Narrow operator tools outperform broad executive dashboards when the buyer's first question is concrete.",
    "nextMove": "Add lightweight per-surface usage analytics + a single contact path; let buyer choice show.",
    "companyTags": [
      "WordPress",
      "Klaviyo",
      "Stripe",
      "Tableau"
    ],
    "relatedSurfaces": [
      "reality.kineticgain.com",
      "revenue.kineticgain.com",
      "replace.kineticgain.com",
      "members.kineticgain.com"
    ],
    "requiredQuestions": [
      "Live at production subdomain",
      "Style01 design discipline",
      "Synthetic-data-only",
      "v1.0-prod hardening"
    ]
  },
  {
    "id": "healthtech-clinical-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "HEALTHTECH",
    "responseStage": "SUBMISSION_READY",
    "responseState": "READY",
    "responseTheme": "Eight clinical / GxP-territory operator surfaces with explicit 'no compliance claim' discipline",
    "operatingQuestion": "Can a regulated-industry reviewer see vertical depth plus readiness language posture without us tripping over compliance vocabulary?",
    "currentPacket": "8 surfaces shipped (gxp/assay/capa/narrative/diagnostics/instruments/safety/specimen); language audit returned clean; each carries explicit 'no claim of HIPAA / GMP / GxP / FDA compliance' disclaimer.",
    "headlineGap": "No HealthTech buyer in the pipeline yet — surfaces are show-don't-tell evidence rather than active sales tools.",
    "coverageScore": 87,
    "evidenceReuseScore": 84,
    "differentiationScore": 76,
    "submissionReadinessScore": 86,
    "draftDays": 5,
    "boardStory": "Regulated-industry buyers test vendor vocabulary discipline first — language posture is the screening filter before capability.",
    "nextMove": "Draft a per-vertical HealthTech Pulse Issue to surface measurement of the broader sector beyond just our 8 surfaces.",
    "companyTags": [
      "HAPI FHIR",
      "FDA",
      "ICH",
      "Azure"
    ],
    "relatedSurfaces": [
      "gxp.kineticgain.com",
      "capa.kineticgain.com",
      "specimen.kineticgain.com",
      "diagnostics.kineticgain.com",
      "safety.kineticgain.com"
    ],
    "requiredQuestions": [
      "Synthetic data only",
      "Readiness/posture vocabulary discipline",
      "NIST AI RMF + ISO 42001 + ICH GxP aligned vocab",
      "v1.0-prod hardening"
    ]
  },
  {
    "id": "growth-consent-ops-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "REVENUE_SYSTEMS",
    "responseStage": "DRAFTING",
    "responseState": "NEEDS_WORK",
    "responseTheme": "Marketing, consent, and attribution governance — 4 named tracks at growth.kineticgain.com",
    "operatingQuestion": "Can we show a martech / growth-ops buyer a coherent consent + experimentation + tokenization + attribution lane without a 6-month integration project?",
    "currentPacket": "Growth Ops hub live with 4 tracks; klaviyo-flow-consent-audit + vwo-experiment-governance-mirror + martech-experiment-evidence-stack + identity-lifecycle-workbench + Skyflow-Klaviyo bridge + UTM attribution Go lib all shipped.",
    "headlineGap": "identity-risk-evidence-ledger CI broken (eslint peer-dep, issue #11 filed) — blocks v1.0-prod hardening of one anchor repo.",
    "coverageScore": 82,
    "evidenceReuseScore": 80,
    "differentiationScore": 74,
    "submissionReadinessScore": 78,
    "draftDays": 5,
    "boardStory": "Growth Ops is the adjacent vertical that broadens audience beyond AI governance — same playbook applied to the martech buyer.",
    "nextMove": "When Codex pushes CI fix, harden identity-risk-evidence-ledger; meanwhile draft a Pulse Klaviyo-vertical spotlight.",
    "companyTags": [
      "Klaviyo",
      "VWO",
      "Skyflow",
      "Tableau"
    ],
    "relatedSurfaces": [
      "growth.kineticgain.com",
      "identity.kineticgain.com"
    ],
    "requiredQuestions": [
      "4 named tracks at growth.kineticgain.com",
      "Tokenization via Skyflow vault pattern",
      "Consent-lineage evidence",
      "Live at production"
    ]
  },
  {
    "id": "trust-pack-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "AI_PLATFORM",
    "responseStage": "SUBMISSION_READY",
    "responseState": "READY",
    "responseTheme": "Eight browser-only AI diligence tools at the apex /trust/ pillar — no backend, no login, no telemetry",
    "operatingQuestion": "Can a buyer risk team use a free public toolkit to draft AI System Cards, evidence packs, vendor intake, tabletop exercises, and risk registers without signing up for anything?",
    "currentPacket": "8 Trust Pack tools live at kineticgain.com/trust/ (AI System Card, Evidence Locker, Shadow AI Discovery, AI Vendor Intake, AI Tabletop, Risk Register, Subprocessors, Vendor AI Disclosure Review); all vanilla JS + inline CSS + under 30KB.",
    "headlineGap": "Per-tool usage analytics not present — choosing which to deepen next is currently guesswork.",
    "coverageScore": 91,
    "evidenceReuseScore": 93,
    "differentiationScore": 80,
    "submissionReadinessScore": 89,
    "draftDays": 2,
    "boardStory": "Free tools at /trust/ become buyer goodwill capital — they are useful before any commercial relationship exists.",
    "nextMove": "Add minimal client-side counter (no server) + GSC submission for /trust/ subpages to surface usage signal.",
    "companyTags": [
      "NIST",
      "ISO",
      "Anthropic",
      "OpenAI"
    ],
    "relatedSurfaces": [
      "kineticgain.com/trust/"
    ],
    "requiredQuestions": [
      "Browser-only architecture",
      "No backend / login / telemetry",
      "Readiness/posture vocab discipline",
      "Aligned with NIST AI RMF + EU AI Act + ISO 42001"
    ]
  },
  {
    "id": "sales-enablement-stack-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "REVENUE_SYSTEMS",
    "responseStage": "DRAFTING",
    "responseState": "NEEDS_WORK",
    "responseTheme": "Four seller-side operator surfaces — proof-gap monitor, trust-center evidence room, security-questionnaire answer studio, RFP response assembler",
    "operatingQuestion": "Can we run our own diligence response through our own four surfaces and surface the proof gaps that close before a buyer asks?",
    "currentPacket": "4 surfaces shipped + hardened to v1.0-prod 2026-05-31; SSL provisioning on subdomain HTTPS (HTTP confirms live); THIS fixture is the dogfood (you are looking at it).",
    "headlineGap": "Subdomain SSL first-time-provisioning lag (auto-resolves in 24h); per-surface analytics not yet wired.",
    "coverageScore": 78,
    "evidenceReuseScore": 82,
    "differentiationScore": 70,
    "submissionReadinessScore": 75,
    "draftDays": 1,
    "boardStory": "A vendor seller-side stack is meta-evidence of seriousness — we ship what we ourselves use.",
    "nextMove": "Wait for SSL provisioning; then exercise full diligence-response cycle on a sample RFP to harden the end-to-end flow.",
    "companyTags": [
      "Vanta",
      "Drata",
      "Loopio",
      "Responsive"
    ],
    "relatedSurfaces": [
      "proofgap.kineticgain.com",
      "trust.kineticgain.com",
      "questionnaire.kineticgain.com",
      "rfp.kineticgain.com"
    ],
    "requiredQuestions": [
      "4 live operator surfaces",
      "v1.0-prod hardened 2026-05-31",
      "Same readiness/posture vocab discipline as buyer side",
      "Aligned with /trust/ tooling for symmetric buyer/seller flow"
    ]
  },
  {
    "id": "kinetic-gain-embedded-rfp-pack",
    "owner": "Miz Causevic (solo founder)",
    "buyer": "Enterprise AI procurement committee · vendor selection team",
    "sector": "AI_PLATFORM",
    "responseStage": "DRAFTING",
    "responseState": "NEEDS_WORK",
    "responseTheme": "Drop-in audit-stream + Decision Card vault contract SDK for B2B SaaS embedders",
    "operatingQuestion": "Can a SaaS embedder ship hash-chained + vault-contracted + ed25519-signable customer-data audit in three lines of code?",
    "currentPacket": "Phase 1 SDK shipped at v0.1.1; TypeScript dual ESM/CJS; zero runtime deps; Procurement Packet Starter shipped in docs/sales/; npm-publish workflow wired but blocked on NPM_TOKEN.",
    "headlineGap": "Not on npm registry yet — README updated to disclose publish-pending state and provide github: install fallback; commercial launch blocked on EIN, bank, Stripe, invoice infrastructure.",
    "coverageScore": 76,
    "evidenceReuseScore": 72,
    "differentiationScore": 68,
    "submissionReadinessScore": 70,
    "draftDays": 7,
    "boardStory": "KGE is the locked first product lane — every other portfolio piece points toward this.",
    "nextMove": "Land NPM_TOKEN secret + first npm publish (Miz escalation); meanwhile harden Procurement Packet Starter into a buyer-ready PDF.",
    "companyTags": [
      "IBM",
      "CyberArk",
      "Alteryx",
      "Skyflow"
    ],
    "relatedSurfaces": [
      "kineticgain.com/embedded/"
    ],
    "requiredQuestions": [
      "TypeScript dual ESM/CJS",
      "Zero runtime dependencies",
      "Hash-chain + ed25519-signable",
      "Procurement Packet Starter in docs/sales/"
    ]
  }
];
