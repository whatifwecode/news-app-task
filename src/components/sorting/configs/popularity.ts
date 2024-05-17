interface popularityOptions {
    value: string;
    label: string;
}

export const popularityOptions: popularityOptions[] = [
    { value: 'relevancy', label: 'Relevancy' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'publishedAt', label: 'Newest' }
];