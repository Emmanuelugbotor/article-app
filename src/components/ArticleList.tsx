import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "../models/ApiResponse";
import ArticleDetails from "./ArticleDetails";
import { IArticleListProps } from "../models/Article";

const ArticleList: React.FC<IArticleListProps> = ({ articles }) => {
  const [articleDetails, setArticleDetails] = useState<Article>({} as Article);
  const handleOnArticleSelect = (article: Article) =>
    setArticleDetails(article);

  return (
    <div className="flex article_wrapper">
      <div className="article-list">
        {articles.map((article: Article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => handleOnArticleSelect(article)}
          />
        ))}
      </div>
      <div className="article-details">
        {articleDetails.title && (
          <ArticleDetails
            title={articleDetails?.title}
            abstract={articleDetails?.abstract}
            url={articleDetails?.url}
            media={articleDetails?.media}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleList;
