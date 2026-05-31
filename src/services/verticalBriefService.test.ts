import { describe, expect, it } from "vitest";
import { coverageMatrix, payload, responseLane, riskMap, submissionPosture, summary, verification } from "./verticalBriefService.js";

describe("rfp response assembler service", () => {
  it("returns an executive summary", () => {
    expect(summary().items).toBeGreaterThan(0);
  });

  it("returns the response lane", () => {
    expect(responseLane()[0]?.buyer).toBeTruthy();
  });

  it("returns the coverage matrix view", () => {
    expect(coverageMatrix()[0]?.coverageScore).toBeGreaterThan(0);
  });

  it("returns the submission posture view", () => {
    expect(submissionPosture()[0]?.submissionReadinessScore).toBeGreaterThan(0);
  });

  it("keeps the board story in the submission posture", () => {
    expect(submissionPosture()[0]?.boardStory).toBeTruthy();
  });

  it("returns the risk map", () => {
    expect(riskMap().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
    expect(payload().verification.length).toBeGreaterThan(0);
  });
});
