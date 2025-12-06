const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin:
      "https://netflix-p3iin0xg3-devraj-singhs-projects-cfcd9b87.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend live!");
});

app.post("/perplexity", async (req, res) => {
  try {
    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "PERPLEXITY_API_KEY not set" });
    }

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Perplexity API error", body: text });
    }

    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    console.error("Perplexity route error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Export Express app as a Vercel function handler
module.exports = app;
