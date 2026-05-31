import { toExport } from "../analyze.js";
import { sampleRfpResponseAssembler } from "../data/sampleVerticalBrief.js";
import { coverageMatrix, payload, responseLane, riskMap, submissionPosture, summary, verification } from "./verticalBriefService.js";

const productTitle = "RFP Response Assembler";
const domain = "https://rfp.kineticgain.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function shell(title: string, active: string, body: string, description: string) {
  const routes = [
    ["/", "Overview"],
    ["/response-lane", "Response lane"],
    ["/coverage-matrix", "Coverage matrix"],
    ["/submission-posture", "Submission posture"],
    ["/verification", "Verification"],
    ["/docs", "Docs"]
  ];

  const nav = routes
    .map(([href, label]) => {
      const current = href === active ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${label}</a>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${productTitle} · ${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${domain}${active === "/" ? "/" : `${active}/`}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${productTitle} · ${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${domain}${active === "/" ? "/" : `${active}/`}" />
    <meta name="twitter:card" content="summary_large_image" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #071019;
        --panel: #101a2b;
        --panel-alt: #0d1624;
        --ink: #ecf2ff;
        --muted: #9fb1c9;
        --accent: #45f2b4;
        --line: rgba(114, 142, 188, 0.24);
        --chip: rgba(73, 242, 180, 0.12);
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", system-ui, sans-serif;
        background:
          radial-gradient(circle at top left, rgba(85, 92, 224, 0.18), transparent 36%),
          linear-gradient(180deg, #071019, #081221 55%, #0b1830);
        color: var(--ink);
      }
      a { color: #8fd0ff; text-decoration: none; }
      a:hover { text-decoration: underline; }
      .wrap { max-width: 1200px; margin: 0 auto; padding: 40px 24px 56px; }
      .hero, .section, .table-wrap {
        background: rgba(16, 26, 43, 0.94);
        border: 1px solid var(--line);
        border-radius: 28px;
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
      }
      .hero { padding: 28px; }
      .eyebrow {
        display: inline-block;
        padding: 10px 14px;
        border-radius: 999px;
        border: 1px solid rgba(69, 242, 180, 0.3);
        background: rgba(69, 242, 180, 0.08);
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font: 600 12px/1.2 "Consolas", monospace;
      }
      h1, h2, h3 {
        margin: 18px 0 10px;
        font-family: Georgia, serif;
        line-height: 1.05;
      }
      h1 { font-size: clamp(40px, 7vw, 72px); max-width: 14ch; }
      h2 { font-size: clamp(28px, 4vw, 42px); }
      .lede, .section p, td, th, li, .metric-copy {
        color: var(--muted);
        line-height: 1.6;
      }
      .topbar {
        display: flex;
        justify-content: space-between;
        gap: 18px;
        align-items: center;
        margin-bottom: 18px;
      }
      .product { font: 700 24px/1.2 "Segoe UI", system-ui, sans-serif; }
      nav { display: flex; flex-wrap: wrap; gap: 10px; }
      nav a {
        padding: 10px 14px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.02);
        color: var(--muted);
      }
      nav a[aria-current="page"] {
        border-color: rgba(69, 242, 180, 0.4);
        background: var(--chip);
        color: var(--ink);
      }
      .metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 14px;
        margin-top: 22px;
      }
      .metric {
        padding: 18px;
        background: rgba(255,255,255,0.03);
        border: 1px solid var(--line);
        border-radius: 22px;
      }
      .metric-label {
        color: var(--muted);
        font: 600 12px/1.2 "Consolas", monospace;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      .metric-value {
        display: block;
        margin-top: 10px;
        font: 700 34px/1 Georgia, serif;
      }
      .section, .table-wrap { margin-top: 28px; padding: 24px; }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 18px;
      }
      .card {
        padding: 18px;
        border-radius: 22px;
        border: 1px solid var(--line);
        background: var(--panel-alt);
      }
      .pill {
        display: inline-flex;
        align-items: center;
        padding: 7px 11px;
        border-radius: 999px;
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.02);
        color: var(--muted);
        font: 600 12px/1.1 "Consolas", monospace;
      }
      .pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
      .table-wrap table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 14px;
      }
      th, td {
        text-align: left;
        vertical-align: top;
        padding: 14px 12px;
        border-top: 1px solid var(--line);
      }
      th {
        color: var(--ink);
        font: 600 12px/1.2 "Consolas", monospace;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      footer {
        margin-top: 28px;
        padding-top: 18px;
        border-top: 1px solid var(--line);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 12px;
        color: var(--muted);
      }
      .footer-links { display: flex; flex-wrap: wrap; gap: 16px; }
      code {
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255,255,255,0.05);
      }
      ul { padding-left: 20px; }
      @media (max-width: 720px) {
        .topbar { flex-direction: column; align-items: flex-start; }
        .wrap { padding: 18px 14px 28px; }
        .hero, .section, .table-wrap { padding: 18px; border-radius: 20px; }
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <section class="hero">
        <div class="topbar">
          <div class="product">${productTitle}</div>
          <nav>${nav}</nav>
        </div>
        <span class="eyebrow">Executive intelligence · buyer response assembly</span>
        ${body}
        <footer>
          <div>Reusable response packs, differentiation logic, submission posture, and buyer-safe procurement packaging for executive teams.</div>
          <div class="footer-links">
            <a href="https://github.com/mizcausevic-dev/">GitHub</a>
            <a href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a>
            <a href="https://kineticgain.com/">Kinetic Gain</a>
          </div>
        </footer>
      </section>
    </div>
  </body>
</html>`;
}

export function renderOverview() {
  const executiveSummary = summary();
  const responses = responseLane();
  const risks = riskMap().slice(0, 5);
  const cards = responses
    .slice(0, 6)
    .map(
      (item) => `<article class="card">
        <span class="pill">${escapeHtml(item.responseState)}</span>
        <h3>${escapeHtml(item.buyer)}</h3>
        <p>${escapeHtml(item.operatingQuestion)}</p>
        <div class="pills">
          <span class="pill">${escapeHtml(item.owner)}</span>
          <span class="pill">${escapeHtml(item.responseStage)}</span>
        </div>
      </article>`
    )
    .join("");
  const riskRows = risks
    .map(
      (item) => `<tr><td>${escapeHtml(item.buyer)}</td><td>${escapeHtml(item.code)}</td><td>${escapeHtml(item.severity)}</td><td>${escapeHtml(item.message)}</td></tr>`
    )
    .join("");

  return shell(
    "Overview",
    "/",
    `
      <h1>Assemble buyer-ready RFP packets that reuse what already ships.</h1>
      <p class="lede">RFP Response Assembler keeps coverage, evidence reuse, differentiation, and submission readiness together so enterprise responses stop starting from zero.</p>
      <div class="metrics">
        <div class="metric"><span class="metric-label">Response packs</span><span class="metric-value">${executiveSummary.items}</span><div class="metric-copy">Modeled buyer-facing response packets in the sample estate.</div></div>
        <div class="metric"><span class="metric-label">Coverage</span><span class="metric-value">${executiveSummary.averageCoverage}</span><div class="metric-copy">Average RFP answer coverage across the current reusable pack set.</div></div>
        <div class="metric"><span class="metric-label">Evidence reuse</span><span class="metric-value">${executiveSummary.averageEvidenceReuse}</span><div class="metric-copy">How much of each packet can be reused without rewriting from scratch.</div></div>
        <div class="metric"><span class="metric-label">Differentiation</span><span class="metric-value">${executiveSummary.averageDifferentiation}</span><div class="metric-copy">How clearly each response sounds like Kinetic Gain instead of generic services copy.</div></div>
        <div class="metric"><span class="metric-label">Ready packs</span><span class="metric-value">${executiveSummary.readyResponsePacks}</span><div class="metric-copy">Buyer packets strong enough to submit right now.</div></div>
        <div class="metric"><span class="metric-label">Hours recovered</span><span class="metric-value">${formatNumber(executiveSummary.hoursRecoveredPerQuarter)}</span><div class="metric-copy">Modeled quarterly hours recovered once response packs become reusable.</div></div>
      </div>
      <section class="section">
        <h2>Response lane</h2>
        <p>Each response packet keeps the buyer, owner, response theme, headline gap, and next move visible before the next deal cycle opens.</p>
        <div class="grid">${cards}</div>
      </section>
      <section class="table-wrap">
        <h2>Risk map</h2>
        <p>The risk map keeps missing coverage, weak differentiation, slow drafting, and blocked ownership visible before procurement drags the deal.</p>
        <table>
          <thead><tr><th>Buyer</th><th>Code</th><th>Severity</th><th>Message</th></tr></thead>
          <tbody>${riskRows}</tbody>
        </table>
      </section>
    `,
    "Executive response-assembly surface for RFP coverage, differentiation, evidence reuse, and submission readiness."
  );
}

export function renderResponseLane() {
  const cards = responseLane()
    .map(
      (item) => `<article class="card">
        <span class="pill">${escapeHtml(item.responseState)}</span>
        <h3>${escapeHtml(item.buyer)}</h3>
        <p><strong>Owner:</strong> ${escapeHtml(item.owner)}</p>
        <p><strong>Theme:</strong> ${escapeHtml(item.responseTheme)}</p>
        <p><strong>Question:</strong> ${escapeHtml(item.operatingQuestion)}</p>
        <p><strong>Gap:</strong> ${escapeHtml(item.headlineGap)}</p>
        <p><strong>Next move:</strong> ${escapeHtml(item.nextMove)}</p>
        <div class="pills"><span class="pill">${escapeHtml(item.responseStage)}</span></div>
      </article>`
    )
    .join("");

  return shell(
    "Response lane",
    "/response-lane",
    `
      <h1>Keep every response room, owner, and blocker visible.</h1>
      <p class="lede">The response-lane view shows which buyer packets are reusable, which still need work, and where ownership is still blocking the deal path.</p>
      <section class="section">
        <h2>Buyer response queue</h2>
        <div class="grid">${cards}</div>
      </section>
    `,
    "Response-lane view for RFP ownership, blocker visibility, and reusable buyer-facing packet assembly."
  );
}

export function renderCoverageMatrix() {
  const rows = coverageMatrix()
    .map(
      (item) => `<tr><td>${escapeHtml(item.owner)}</td><td>${escapeHtml(item.buyer)}</td><td>${escapeHtml(item.responseTheme)}</td><td>${item.coverageScore}</td><td>${item.evidenceReuseScore}</td><td>${escapeHtml(item.companyTags.join(", "))}</td></tr>`
    )
    .join("");

  return shell(
    "Coverage matrix",
    "/coverage-matrix",
    `
      <h1>See where RFP coverage and reuse still break down.</h1>
      <p class="lede">The coverage matrix turns buyer-response work into a readable inventory of answer coverage, evidence reuse, and company-tag context.</p>
      <section class="table-wrap">
        <h2>Coverage inventory</h2>
        <table>
          <thead><tr><th>Owner</th><th>Buyer</th><th>Response theme</th><th>Coverage</th><th>Evidence reuse</th><th>Company tags</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </section>
    `,
    "Coverage matrix for reusable RFP packets, answer completeness, and evidence reuse."
  );
}

export function renderSubmissionPosture() {
  const rows = submissionPosture()
    .map(
      (item) => `<tr><td>${escapeHtml(item.buyer)}</td><td>${escapeHtml(item.owner)}</td><td>${item.submissionReadinessScore}</td><td>${item.differentiationScore}</td><td>${item.draftDays}</td><td>${escapeHtml(item.companyTags.join(", "))}</td><td>${escapeHtml(item.relatedSurfaces.join(", "))}</td></tr>`
    )
    .join("");

  return shell(
    "Submission posture",
    "/submission-posture",
    `
      <h1>Keep submission readiness, differentiation, and source proof together.</h1>
      <p class="lede">The submission-posture view shows whether each RFP packet can stand up to procurement, legal, and executive review without a manual rewrite loop.</p>
      <section class="table-wrap">
        <h2>Submission matrix</h2>
        <table>
          <thead><tr><th>Buyer</th><th>Owner</th><th>Readiness</th><th>Differentiation</th><th>Draft days</th><th>Company tags</th><th>Related surfaces</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </section>
    `,
    "Submission-posture matrix for RFP readiness, differentiation, and linked supporting surfaces."
  );
}

export function renderVerification() {
  const items = verification().map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return shell(
    "Verification",
    "/verification",
    `
      <h1>Verification posture stays explicit.</h1>
      <p class="lede">This response-assembly surface is synthetic, read-only, and reproducible from the included sample export. This page keeps those guardrails easy to audit before the repo is shown externally.</p>
      <section class="section"><h2>Verification notes</h2><ul>${items}</ul></section>
    `,
    "Verification notes for the synthetic response-assembly surface, sample export, and read-only procurement workflow."
  );
}

export function renderDocs() {
  return shell(
    "Docs",
    "/docs",
    `
      <h1>RFP Response Assembler docs</h1>
      <p class="lede">This repo packages buyer-safe RFP responses into one readable surface: response lane, coverage matrix, submission posture, and risk map.</p>
      <section class="section">
        <h2>Core routes</h2>
        <ul>
          <li><code>/response-lane</code> keeps owner, buyer, blockers, and next move visible.</li>
          <li><code>/coverage-matrix</code> compares response coverage and evidence reuse.</li>
          <li><code>/submission-posture</code> shows where differentiation and draft time still drag the response cycle.</li>
          <li><code>/verification</code> makes the synthetic and read-only posture explicit.</li>
        </ul>
      </section>
    `,
    "Product documentation for RFP Response Assembler and its response, coverage, and submission routes."
  );
}

export function renderSample() {
  return JSON.stringify(toExport(sampleRfpResponseAssembler, payload().generatedAt), null, 2);
}
