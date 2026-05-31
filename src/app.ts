import express from "express";
import { renderCoverageMatrix, renderDocs, renderOverview, renderResponseLane, renderSample, renderSubmissionPosture, renderVerification } from "./services/render.js";
import { coverageMatrix, payload, responseLane, riskMap, submissionPosture, summary, verification } from "./services/verticalBriefService.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderOverview()));
  app.get("/response-lane", (_req, res) => res.type("html").send(renderResponseLane()));
  app.get("/coverage-matrix", (_req, res) => res.type("html").send(renderCoverageMatrix()));
  app.get("/submission-posture", (_req, res) => res.type("html").send(renderSubmissionPosture()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/response-lane", (_req, res) => res.json(responseLane()));
  app.get("/api/coverage-matrix", (_req, res) => res.json(coverageMatrix()));
  app.get("/api/submission-posture", (_req, res) => res.json(submissionPosture()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.json(payload().sample));
  app.get("/api/payload", (_req, res) => res.json(payload()));
  app.get("/sample.json", (_req, res) => res.type("json").send(renderSample()));

  return app;
}

export function startServer(port = Number(process.env.PORT ?? 3000)) {
  return createApp().listen(port, () => {
    console.log(`rfp-response-assembler listening on http://127.0.0.1:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}`) {
  startServer();
}
