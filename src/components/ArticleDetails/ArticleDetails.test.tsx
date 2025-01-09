import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import ArticleDetails from './ArticleDetails';

const mockArticle = {
  title: 'Test Article',
  abstract: 'Test Abstract',
  url: 'http://example.com',
  media: [
    {
      'media-metadata': [
        { url: 'http://example.com/image.jpg' },
      ],
    },
  ],
};

describe('ArticleDetails', () => {
  test('renders title, abstract, and link', () => {
    render(<ArticleDetails {...mockArticle} />);
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('Test Abstract')).toBeInTheDocument();
    expect(screen.getByText('Read More')).toHaveAttribute('href', 'http://example.com');
  });

  test('renders image if media is provided', () => {
    render(<ArticleDetails {...mockArticle} />);
    expect(screen.getByAltText('Test Articleimage')).toHaveAttribute('src', 'http://example.com/image.jpg');
  });
});
