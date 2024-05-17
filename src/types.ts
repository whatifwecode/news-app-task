export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source?: {
        id: string;
        name: string;
    };
    author?: string | null;
    publishedAt?: string;
    content?: string;
}

export interface QueryFunctionResult {
    data?: { articles: NewsArticle[] };
    error?: any;
    isLoading: boolean;
}

export interface QueryFunction {
    (params: { apiKey: string; page: number }): QueryFunctionResult;
}
