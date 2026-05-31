import request from "supertest";
import { createApp } from "../src/app.js";

async function run() {
  const app = createApp();
  const htmlRoutes = ["/", "/response-lane", "/coverage-matrix", "/submission-posture", "/verification", "/docs"];
  const jsonRoutes = [
    "/api/dashboard/summary",
    "/api/response-lane",
    "/api/coverage-matrix",
    "/api/submission-posture",
    "/api/risk-map",
    "/api/verification",
    "/api/sample",
    "/api/payload"
  ];

  for (const route of htmlRoutes) {
    const response = await request(app).get(route);
    if (response.status !== 200) throw new Error(`Expected 200 on ${route}, got ${response.status}`);
  }

  for (const route of jsonRoutes) {
    const response = await request(app).get(route);
    if (response.status !== 200) throw new Error(`Expected 200 on ${route}, got ${response.status}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
