import express from "express";
import { model } from "./gemini.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
