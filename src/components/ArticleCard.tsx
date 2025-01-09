import React from "react";
import { IArticleCardProps } from "../models/Article";

const ArticleCard: React.FC<IArticleCardProps> = ({ article, onClick }) => (
  <div className="article-card fill" onClick={onClick}>
    <p>{article?.title}</p>
  </div>
);

export default ArticleCard;
