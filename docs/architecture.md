# Architecture

RFP Response Assembler is a static-friendly TypeScript executive-intelligence layer for the Kinetic Gain procurement, diligence, and buyer-response estate.

- `src/data/sampleVerticalBrief.ts` holds the modeled response packets, owners, buyers, company tags, and related surfaces.
- `src/analyze.ts` scores response coverage, evidence reuse, differentiation, submission readiness, and draft-day drag.
- `src/services/verticalBriefService.ts` exposes the response-lane, coverage-matrix, submission-posture, and risk-map packets used by both the app and prerender step.
- `src/services/render.ts` renders the executive HTML surfaces and the sample JSON output.
- `scripts/prerender.ts` emits the static site, API payloads, `robots.txt`, and `sitemap.xml` for GitHub Pages.
