import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Article from '../Article';
import { NewsArticle } from '../../../types';

// Mock news article data for testing
const mockArticle: NewsArticle = {
    title: 'Test Article',
    description: 'Test description',
    urlToImage: 'https://example.com/image.jpg',
    url: 'https://example.com/article',
};

test('renders article with correct data', () => {
    render(
        <BrowserRouter>
            <Article article={mockArticle} />
        </BrowserRouter>
    );

    const articleTitle = screen.getByText('Test Article');
    const articleDescription = screen.getByText('Test description');
    const articleImage = screen.getByAltText('Test Article');

    expect(articleTitle).toBeInTheDocument();
    expect(articleDescription).toBeInTheDocument();
    expect(articleImage).toBeInTheDocument();
    expect(articleImage).toHaveAttribute('src', 'https://example.com/image.jpg');
});

test('renders link with correct URL', () => {
    render(
        <BrowserRouter>
            <Article article={mockArticle} />
        </BrowserRouter>
    );


    const articleLink = screen.getByRole('link');
    expect(articleLink).toHaveAttribute('href', 'https://example.com/article');
    expect(articleLink).toHaveAttribute('target', '_blank');
    expect(articleLink).toHaveAttribute('rel', 'noopener noreferrer');
});
