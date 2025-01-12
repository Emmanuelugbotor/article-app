import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const ProblematicComponent = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("renders child components without errors", () => {
    render(
      <ErrorBoundary>
        <div>Safe Component</div>
      </ErrorBoundary>
    );
    expect(screen.getByText("Safe Component")).toBeInTheDocument();
  });

  it("handles errors gracefully with no error message", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );
    const errorMessage = screen.queryByText("undefined");
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("catches errors and displays fallback UI", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Oopss!/i)).toBeInTheDocument();
    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });
});
