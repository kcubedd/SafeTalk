// services/gemini.js
import { GEMINI_API_KEY } from "@env";  // <-- import here at the top

export const sendMessageToGemini = async (message) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
      }
    );

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "❌ Error connecting to Gemini API";
  }
};
