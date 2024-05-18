import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsArticle } from '../../types';

interface TopHeadlinesQueryParams {
    apiKey: string;
    country: string;
    category?: string;
    q?: string;
    pageSize?: number;
    page?: number;
}

interface AllArticlesQueryParams {
    sortBy?: string;
    q?: string;
    apiKey?: string;
    pageSize?: number;
    page?: number;
    oldestAllowed?: string;
    newestAllowed?: string;
}

interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

const filterArticles = (articles: NewsArticle[]): NewsArticle[] => {
    return articles.filter(article => {
        return article.title !== '[Removed]' && article.content !== '[Removed]';
    });
};

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query<NewsResponse, TopHeadlinesQueryParams>({
            query: ({ apiKey, category, country, q, pageSize = 20, page = 1 }) => ({
                url: 'top-headlines',
                params: {
                    country,
                    category,
                    q,
                    pageSize,
                    page,
                    apiKey
                }
            }),
            transformResponse: (response: NewsResponse) => {
                const filteredArticles = filterArticles(response.articles);
                return {
                    ...response,
                    articles: filteredArticles
                };
            }
        }),
        getAllArticles: builder.query<NewsResponse, AllArticlesQueryParams>({
            query: ({ sortBy, q, apiKey, pageSize = 20, page = 1, oldestAllowed, newestAllowed }) => ({
                url: 'everything',
                params: {
                    q,
                    pageSize,
                    page,
                    apiKey,
                    sortBy,
                    from: oldestAllowed,
                    to: newestAllowed
                }
            }),
            transformResponse: (response: NewsResponse) => {
                const filteredArticles = filterArticles(response.articles);
                return {
                    ...response,
                    articles: filteredArticles
                };
            }
        })
    })
});

export const { useGetTopHeadlinesQuery, useGetAllArticlesQuery } = newsApi;
