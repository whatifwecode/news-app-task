import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface ISortProps {
    options: Option[];
    defaultValue: string;
    onChange: (value: string) => void;
    label: string;
}

const Sort = ({ options, defaultValue, onChange, label }: ISortProps) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="flex items-center space-x-4">
            <p>{label}</p>
            <select
                onChange={handleSortChange}
                defaultValue={defaultValue}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Sort;
