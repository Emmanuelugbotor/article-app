import React from "react";
import { IArticleDetailsProps } from "../../models/Article";

const ArticleDetails: React.FC<IArticleDetailsProps> = ({
  title,
  abstract,
  url,
  media,
}) => {
  return (
    <div className="article-detail-wrapper">
      <h2>{title}</h2>
      <div className="article-detail-image-holder">
        <img
          src={
            media.length
              ? media[0]["media-metadata"][
                  media[0]["media-metadata"].length - 1
                ]?.url
              : ""
          }
          alt={title + "image"}
        />
      </div>
      <p data-testid="abstract">{abstract}</p>
      <a href={url} rel="noopener" target="_blank">
        Read More
      </a>
    </div>
  );
};

export default ArticleDetails;
