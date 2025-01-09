import axios from "axios";
import { BASE_URL } from "./constant";
import { Article, NytApiResponse } from "../models/ApiResponse";

export const fetchArticles = async (period: number = 7): Promise<Article[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API key is missing. Please set REACT_APP_API_KEY in your .env file."
    );
  }
  try {
    const response = await axios.get<NytApiResponse>(
      `${BASE_URL}/${period}.json?api-key=${apiKey}`
    );
    return response.data.results;
  } catch {
    throw new Error("Failed to fetch articles");
  }
};
