import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const API_KEY = "AIzaSyAqKYiNi2lTw2qkXxwF4OZyeWzP_8cBzrE";
const MODEL_NAME = "gemini-1.0-pro";

export const fetchGeminiResponse = async (message: string) => {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const modelInstance = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      // Add more safety settings if needed
    ];

    const chat = modelInstance.startChat({
      generationConfig,
      safetySettings,
      history: [
        { role: "user", parts: [{ text: "HELLO" }] },
        {
          role: "model",
          parts: [{ text: "Hello there! How can I assist you today?" }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Fetch error:", error);
    return "Sorry, something went wrong.";
  }
};
