import { Article, Media } from "./ApiResponse";

export interface UseFetchArticles {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export interface IArticleCardProps {
  article: Article;
  onClick: () => void;
}

export interface IArticleListProps {
  articles: Article[];
}

export interface IArticleDetailsProps {
  title: string;
  abstract: string;
  url: string;
  media: Media[];
}
