import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ArticleContainer from "./containers/ArticleContainer/ArticleContainer";

function App() {
  return (
    <ErrorBoundary>
      <ArticleContainer />
    </ErrorBoundary>
  );
}

export default App;
