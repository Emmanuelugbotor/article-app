import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import { Article } from "../../models/ApiResponse";

type MockArticle = Pick<Article, "id" | "title" | "abstract">;

const mockArticle: MockArticle = {
  id: 1,
  title: "Test Article",
  abstract: "Test Abstract",
};

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
});
