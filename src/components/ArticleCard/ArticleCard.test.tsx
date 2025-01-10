import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import { mockArticle } from "../../tests/mock/mockArticle";

describe("ArticleCard", () => {
  test("renders article title", () => {
    render(<ArticleCard article={mockArticle} onClick={() => {}} />);
    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<ArticleCard article={mockArticle} onClick={onClick} />);
    fireEvent.click(screen.getByText("Test Article"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("does not crash when no onClick is passed", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });

  test("does not crash when  article title is missing", () => {
    const invalidArticle = { ...mockArticle, title: '' };
    render(<ArticleCard article={invalidArticle} onClick={() => {}} />);
    expect(screen.getByTestId("article-card")).toBeInTheDocument();
    
  });
});
