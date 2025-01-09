import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { Article } from "../models/ApiResponse";
import { UseFetchArticles } from "../models/Article";

export const useFetchArticles = (period: number): UseFetchArticles => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles(period);
        setArticles(data);
      } catch {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [period]);

  return { articles, loading, error };
};
