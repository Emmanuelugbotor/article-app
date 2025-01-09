import "@testing-library/jest-dom";

import { render, screen, waitFor } from '@testing-library/react';
import ArticleContainer from './ArticleContainer';
import * as api from '../../api/index';

jest.mock('../../api/index', () => ({
  fetchArticles: jest.fn(),
}));

const mockArticles = [
  { id: 1, title: 'Test Article 1', abstract: '', url: '', media: [] },
  { id: 2, title: 'Test Article 2', abstract: '', url: '', media: [] },
];

describe('ArticleContainer', () => {
  test('renders loading initially', () => {
    render(<ArticleContainer />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders articles after fetching', async () => {
    (api.fetchArticles as jest.Mock).mockResolvedValue(mockArticles);
    render(<ArticleContainer />);
    await waitFor(() => expect(screen.getByText('Test Article 1')).toBeInTheDocument());
  });

  test('renders error on fetch failure', async () => {
    (api.fetchArticles as jest.Mock).mockRejectedValue(new Error('Fetch Error'));
    render(<ArticleContainer />);
    await waitFor(() => expect(screen.getByText('Error: Failed to fetch articles')).toBeInTheDocument());
  });
});
