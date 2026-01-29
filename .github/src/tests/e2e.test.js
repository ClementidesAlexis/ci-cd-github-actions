import request from "supertest";
import express from "express";
import router from "../src/routes.js";

const app = express();
app.use(express.json());
app.use("/api", router);

import { test, expect } from "vitest";

test("POST /api/generate returns 400 without prompt", async () => {
  const res = await request(app).post("/api/generate").send({});
  expect(res.status).toBe(400);
});
