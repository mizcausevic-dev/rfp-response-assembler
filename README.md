# RFP Response Assembler

Executive response-assembly surface for RFP coverage, differentiation, evidence reuse, and submission readiness across the Kinetic Gain executive-intelligence estate.

- Live: `https://rfp.kineticgain.com/`
- Repo: `mizcausevic-dev/rfp-response-assembler`

## What it does
- maps buyer-facing response packets to ownership, blockers, response themes, and next move
- keeps coverage, evidence reuse, differentiation, and submission readiness in one lane
- separates ready, needs-work, and blocked response rooms before the next procurement, legal, or executive review
- exposes the same response posture through HTML, JSON APIs, screenshots, and a reproducible CLI

## Routes
- `/`
- `/response-lane`
- `/coverage-matrix`
- `/submission-posture`
- `/verification`
- `/docs`

## Local run
```powershell
cd rfp-response-assembler
npm install
npm run verify
npm run prerender
npm run render:assets
```

## CLI
```powershell
npx rfp-response-assembler fixtures/rfp-response-assembler.json --format summary
npx rfp-response-assembler fixtures/rfp-response-assembler-clean.json --format json
```

## Verification
- synthetic sample data only
- no live customer RFP packets, procurement answers, or private deal artifacts
- all routes and packets are generated from the sample export in this repo
