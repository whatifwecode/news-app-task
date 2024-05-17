import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setApiKey } from './authSlice';
import Input from '../../components/UI/input/Input';

const Login = () => {
    const [email, setEmail] = useState('');
    const [apiKey, setApiKeyInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setApiKey(apiKey));
        navigate('/news');
    };

    return (
        <div className='p-4 max-w-sm mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    label="Email"
                />
                <Input
                    type="text"
                    id="apiToken"
                    value={apiKey}
                    onChange={(event) => setApiKeyInput(event.target.value)}
                    label="API Token"
                />
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Login
                    </button>
                </div>
            </form>
            <div className="mt-4 text-sm text-gray-600">
                Don't have an API token? <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">Get one here</a>.
            </div>
        </div>
    );
}

export default Login;
