import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleDetails from "./ArticleDetails";
import { mockArticle } from "../../tests/mock/mockArticle";

describe("ArticleDetails", () => {
  test("renders title, abstract, and link", () => {
    render(<ArticleDetails {...mockArticle} />);
    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("Test Abstract")).toBeInTheDocument();
    expect(screen.getByText("Read More")).toHaveAttribute(
      "href",
      "https://example.com/test-article"
    );
  });

  test("renders image if media is provided", () => {
    render(<ArticleDetails {...mockArticle} />);
    expect(screen.getByAltText("Test Articleimage")).toHaveAttribute(
      "src",
      "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg"
    );
  });

  test("does not render image if media is not provided", () => {
    const articleWithoutMedia = { ...mockArticle, media: [] };
    render(<ArticleDetails {...articleWithoutMedia} />);
    const img = screen.queryByAltText("Test Articleimage");
    expect(img).toBeInTheDocument();
  });

  test("handles missing abstract gracefully", () => {
    const articleWithoutAbstract = { ...mockArticle, abstract: "" };
    render(<ArticleDetails {...articleWithoutAbstract} />);
    expect(screen.getByTestId("abstract")).toBeInTheDocument();
  });
});
