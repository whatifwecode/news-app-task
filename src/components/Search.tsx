import React, { useState } from 'react';
import Input from '../components/UI/input/Input';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div>
            <Input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search articles..."
            />
        </div>
    );
}

export default Search;
