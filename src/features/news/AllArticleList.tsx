import { useState, useEffect } from 'react';
import { useGetAllArticlesQuery } from './newsApi';
import ArticlesListLayout from "../../layouts/ArticlesListLayout.tsx";
import Search from "../../components/Search.tsx";
import SortPopularity from "../../components/sorting/SortPopularity.tsx";

const AllArticlesList = () => {
    // State variables for managing articles key, search query, popularity filter, oldest and newest allowed articles
    const [articlesKey, setArticlesKey] = useState(0);
    const [searchQuery, setSearchQuery] = useState('global');
    const [popularity, setPopularity] = useState('publishedAt');
    const [oldestAllowed, setOldestAllowed] = useState('');
    const [newestAllowed, setNewestAllowed] = useState('');

    // Effect to update articles key when search query, popularity, oldest allowed, or newest allowed changes
    useEffect(() => {
        setArticlesKey(prevKey => prevKey + 1);
    }, [searchQuery, popularity, oldestAllowed, newestAllowed]);

    // Function to handle search input change
    const handleSearch = (value: string) => {
        // If search value is empty, set it to 'global', otherwise set it to the entered value
        if (value.trim() === '') {
            setSearchQuery('global');
        } else {
            setSearchQuery(value);
        }
    };

    // Function to handle popularity filter change
    const handleFilterChange = (filterType: string, value: string) => {
        // Set popularity filter value
        switch (filterType) {
            case 'popularity':
                setPopularity(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="space-y-4 p-4 mx-auto w-[1200px]">
            <div className='flex gap-5'>
                {/* SortPopularity component for selecting popularity filter */}
                <SortPopularity onChange={(value) => handleFilterChange('popularity', value)}/>
                {/* Search component for searching articles */}
                <Search onSearch={(value) => handleSearch(value)} />
                {/* Input fields for setting oldest and newest allowed articles */}
                <input type="date" value={oldestAllowed} onChange={(e) => setOldestAllowed(e.target.value)} />
                <input type="date" value={newestAllowed} onChange={(e) => setNewestAllowed(e.target.value)} />
            </div>
            {/* ArticlesListLayout component to display articles */}
            <ArticlesListLayout
                key={articlesKey}
                // Use useGetAllArticlesQuery hook with parameters including search query, popularity filter, oldest and newest allowed articles
                queryFunction={(params) => useGetAllArticlesQuery({...params, q: searchQuery, sortBy: popularity, oldestAllowed, newestAllowed})}
            />
        </div>
    );
}

export default AllArticlesList;
