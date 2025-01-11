import React from "react";
import { IArticleCardProps } from "../../models/Article";

const ArticleCard: React.FC<IArticleCardProps> = ({ article, onClick }) => (
  <div className="article-card fill" data-testid="article-card">
    <p>
      <button onClick={onClick}>{article.title}</button>
    </p>
  </div>
);

export default ArticleCard;
