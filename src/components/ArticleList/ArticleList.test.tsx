import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleList from "./ArticleList";
import { mockArticles } from "../../tests/mock/mockArticle";

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

  test("does not crash when articles list is empty", () => {
    render(<ArticleList articles={[]} />);
    expect(screen.getByText("No Article Available")).toBeInTheDocument();
  });
});
