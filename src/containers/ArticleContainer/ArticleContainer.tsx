import { Component } from "react";
import ArticleList from "../../components/ArticleList/ArticleList";
import { fetchArticles } from "../../api";
import { UseFetchArticles } from "../../models/Article";

type State = Pick<UseFetchArticles, "articles" | "loading" | "error">;
class ArticleContainer extends Component<unknown, State> {
  state: State = {
    articles: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const articles = await fetchArticles(7);
      this.setState({ articles, loading: false });
    } catch {
      this.setState({ error: "Failed to fetch articles", loading: false });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <ArticleList articles={articles} />;
  }
}

export default ArticleContainer;
