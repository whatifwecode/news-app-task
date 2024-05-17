import { useState, useEffect } from 'react';
import { useGetTopHeadlinesQuery } from './newsApi';
import SortCategories from "../../components/sorting/SortCategories.tsx";
import SortCountries from '../../components/sorting/SortCountries.tsx';
import ArticlesListLayout from "../../layouts/ArticlesListLayout.tsx";
import Search from "../../components/Search";

const TopHeadlineArticlesListWrapper = () => {
    // State variables to manage category, country, search query, and key for articles list
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('us');
    const [articlesKey, setArticlesKey] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle changes in filters (category, country)
    const handleFilterChange = (filterType: string, value: string) => {
        switch (filterType) {
            case 'country':
                setCountry(value);
                break;
            case 'category':
                setCategory(value);
                break;
            default:
                break;
        }
    };

    // Effect to update articles key when category, country, or search query changes
    useEffect(() => {
        setArticlesKey(prevKey => prevKey + 1);
    }, [category, country, searchQuery]);

    return (
        <div className="space-y-4 p-4 mx-auto w-[1200px]">
            <div className='flex gap-5'>
                {/* SortCategories component for selecting news category */}
                <SortCategories onChange={(value) => handleFilterChange('category', value)}/>
                {/* SortCountries component for selecting country */}
                <SortCountries onChange={(value) => handleFilterChange('country', value)}/>
                {/* Search component for searching articles */}
                <Search onSearch={(value) => setSearchQuery(value)} />
            </div>
            {/* ArticlesListLayout component to display articles */}
            <ArticlesListLayout
                key={articlesKey}
                // Use useGetTopHeadlinesQuery hook with parameters
                queryFunction={(params) => useGetTopHeadlinesQuery({...params, country, category, q: searchQuery})}
            />
        </div>
    );
}

export default TopHeadlineArticlesListWrapper;
