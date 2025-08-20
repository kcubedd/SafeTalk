import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;  // ✅ load from .env
const MODEL = "gemini-1.5-flash-latest";

async function run() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Hello Gemini" }] }],
      }),
    }
  );

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

run();
