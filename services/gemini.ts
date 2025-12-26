
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async analyzeUrl(url: string): Promise<{ title: string; category: string }> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this URL and provide a concise page title and a one-word category (e.g., Download, Article, Social, Tool). URL: ${url}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "object",
            properties: {
              title: { type: "string" },
              category: { type: "string" }
            },
            required: ["title", "category"]
          }
        }
      });

      const data = JSON.parse(response.text || '{"title": "Untitled Link", "category": "General"}');
      return data;
    } catch (error) {
      console.error("Gemini Analysis Error:", error);
      return { title: url.split('/').pop() || 'Untitled Link', category: "General" };
    }
  }
}

export const geminiService = new GeminiService();
