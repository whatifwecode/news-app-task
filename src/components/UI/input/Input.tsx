import React from 'react';

interface InputProps {
    type: string;
    id?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
}

const Input = ({ type, id, value, onChange, label, placeholder }: InputProps) => {
    return (
        <div>
            {label && <label htmlFor={id} className='block text-sm font-medium text-gray-700'>{label}</label>}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                required
            />
        </div>
    );
}

export default Input;