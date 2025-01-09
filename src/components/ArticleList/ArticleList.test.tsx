import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleList from "./ArticleList";
import { Article } from "../../models/ApiResponse";

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Article 1",
    abstract: "abstract testing 1",
    url: "",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption:
          "The advisory called for updating labels on all alcoholic beverages with a warning that drinking heightens the risk for at least seven cancers, including common ones like breast and colon cancers.",
        copyright: "Ruth Fremson/The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Article 2",
    abstract: "abstract testing 2",
    url: "",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption:
          "The advisory called for updating labels on all alcoholic beverages with a warning that drinking heightens the risk for at least seven cancers, including common ones like breast and colon cancers.",
        copyright: "Ruth Fremson/The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
  },
];

describe("ArticleList", () => {
  test("renders a list of articles", () => {
    render(<ArticleList articles={mockArticles} />);
    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });

  test("shows article details when an article is clicked", () => {
    render(<ArticleList articles={mockArticles} />);
    fireEvent.click(screen.getByText("Article 1"));
    expect(screen.getByText("abstract testing 1")).toBeInTheDocument();
  });
});
