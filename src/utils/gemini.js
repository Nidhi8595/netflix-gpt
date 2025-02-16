import axios from "axios";
import { GEMINI_KEY } from "./constants";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

const fetchGeminiResponse = async (prompt) => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error fetching response.";
  }
};

export default fetchGeminiResponse;
