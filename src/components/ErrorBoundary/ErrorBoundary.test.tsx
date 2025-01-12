import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const ProblematicComponent = ({ throwError }: { throwError: boolean }) => {
  if (throwError) {
    throw new Error("Test error");
  }
  return <div>Safe Component</div>;
};

describe("ErrorBoundary", () => {
  it("renders child components without errors", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent throwError={false} />
      </ErrorBoundary>
    );
    expect(screen.getByText("Safe Component")).toBeInTheDocument();
  });

  it("catches errors and displays fallback UI", () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent throwError={true} />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Oopss!/i)).toBeInTheDocument();
    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });

  it("handles errors with empty or null error message", () => {
    class CustomError extends Error {
      constructor() {
        super();
        this.message = "";
      }
    }

    const ProblematicComponentWithCustomError = () => {
      throw new CustomError();
    };

    render(
      <ErrorBoundary>
        <ProblematicComponentWithCustomError />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Oopss!/i)).toBeInTheDocument();
  });
});
