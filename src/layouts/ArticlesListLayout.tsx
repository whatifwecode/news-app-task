import { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks.ts';
import Loading from "../components/Loading";
import Error from '../components/Error';
import Article from "../features/news/Article";
import { NewsArticle, QueryFunction } from "../types.ts";
import { selectApiKey } from "../features/auth/authSlice.ts";

const ArticlesListLayout = ({ queryFunction }: { queryFunction: QueryFunction }) => {
    // Get API key from Redux store or session storage
    const apiKey = useAppSelector(selectApiKey) || sessionStorage.getItem('apiKey') || '';

    // State variables to manage pagination and loading state
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Fetch data using the provided query function
    const { data: response, error, isLoading } = queryFunction({
        apiKey,
        page,
    });

    // Update articles state when response data changes
    useEffect(() => {
        if (!response) return;

        // Check if there are no more articles or if the limit of 100 articles has been reached
        if (response.articles.length === 0 || articles.length + response.articles.length >= 100) {
            setHasMore(false);
        }

        // Append new articles to the existing list
        setArticles(prevArticles => [...prevArticles, ...response.articles]);
        setIsFetching(false);
    }, [response]);

    // Add scroll event listener for infinite scrolling
    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                if (!loading && !isLoading && !isFetching && hasMore) {
                    setLoading(true);
                    setPage(prevPage => prevPage + 1);
                    setIsFetching(true);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, isLoading, isFetching, hasMore]);

    // Reset loading state when page changes
    useEffect(() => {
        if (page > 1) {
            setLoading(false);
        }
    }, [page]);

    // Render loading state while fetching data
    if (isLoading && articles.length === 0) {
        return <Loading />;
    }

    // Render error message if there's an error
    if (error) {
        return <Error message={error.data.message} />;
    }

    return (
        <div>
            {/* Render articles */}
            {articles.length > 0 ? (
                articles.map((article) => (
                    <Article key={article.url} article={article} />
                ))
            ) : (
                // Render loading indicator if articles are empty
                <Loading />
            )}
            {/* Render additional loading indicators for infinite scrolling */}
            {loading && <Loading />}
            {isFetching && <Loading />}
            {!hasMore && <Error message="No more articles available." />}
        </div>
    );
}

export default ArticlesListLayout;
