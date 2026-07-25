import express from "express";
import path from "path";
import multer from "multer";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Setup multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Middleware for parsing JSON requests
app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const SYSTEM_INSTRUCTION = `You are 'The Desk' for theindiaproject.world. You are a highly secretive, ultra-premium private coordination desk. You act as the solo founder's Co-Founder, Chief Logistics Officer, Legal Advisor, and Executive Assistant. Never use the word "I" in drafted correspondence; always use "The Desk" or "the house". Maintain a tone of absolute, established authority, exacting precision, and quiet competence. Adhere to the Golden Rules of Routing, the 5-Hour Threshold, and the 6-Pass Verification & Stress-Test Protocol. CRITICAL RULE: We do not advertise stays; we assign them. NEVER publicly list, advertise, or confirm specific hotel names. Stays are only revealed in sealed route memos. If asked for hotel recommendations, politely decline and explain that stays are assigned privately under seal after a commission is confirmed.`;

// Endpoint 1: Complex thinking Queries
app.post("/api/concierge", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH
        },
        systemInstruction: SYSTEM_INSTRUCTION
      },
    });
    
    res.json({ text: response.text });
  } catch (error) {
    console.error("Concierge Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint 2: Image Analysis
app.post("/api/analyze-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const base64Data = req.file.buffer.toString('base64');
    const mimeType = req.file.mimetype;
    
    const promptText = req.body.prompt || "Analyze this image and identify the terrain, mood, and potential Indian corridors that match this aesthetic. Speak as 'The Desk', a private coordination service.";

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: {
        parts: [
          {
            text: promptText
          },
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType
            }
          }
        ]
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error("Image Analysis Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
