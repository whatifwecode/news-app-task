import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlesListLayout from './ArticlesListLayout';
import { QueryFunction, NewsArticle } from '../types.ts';
import {useAppSelector} from "../app/hooks.ts";

// Mock the query function
const mockQueryFunction: QueryFunction = jest.fn().mockReturnValue({
    data: {
        articles: [
            {
                title: 'Test Article 1',
                description: 'Description 1',
                urlToImage: 'https://example.com/image1.jpg',
                url: 'https://example.com/article1',
            },
            {
                title: 'Test Article 2',
                description: 'Description 2',
                urlToImage: 'https://example.com/image2.jpg',
                url: 'https://example.com/article2',
            },
        ],
    },
    isLoading: false,
    error: undefined,
});

jest.mock('../app/hooks.ts', () => ({
    useAppSelector: jest.fn(),
}));

jest.mock('../components/Loading', () => () => <div data-testid="loading">Loading...</div>);

jest.mock('../components/Error', () => ({ message }: { message: string }) => <div data-testid="error">{message}</div>);

jest.mock('../features/news/Article', () => ({ article }: { article: NewsArticle }) => (
    <div data-testid="article">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <img src={article.urlToImage} alt={article.title} />
        <a href={article.url}>{article.url}</a>
    </div>
));

test('renders articles list layout with loading state', async () => {
    (useAppSelector as jest.Mock).mockReturnValue('');

    render(<ArticlesListLayout queryFunction={mockQueryFunction} />);

    await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
});

test('renders articles list layout with error state', async () => {
    (useAppSelector as jest.Mock).mockReturnValue('');

    const mockErrorQueryFunction: QueryFunction = jest.fn().mockReturnValue({
        data: undefined,
        isLoading: false,
        error: { data: { message: 'Error message' } },
    });

    render(<ArticlesListLayout queryFunction={mockErrorQueryFunction} />);

    await waitFor(() => expect(screen.getByText('Error message')).toBeInTheDocument());
});

test('renders articles list layout with articles', async () => {
    (useAppSelector as jest.Mock).mockReturnValue('');

    render(<ArticlesListLayout queryFunction={mockQueryFunction} />);

    await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
});
