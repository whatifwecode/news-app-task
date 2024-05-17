import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login';
import {store} from "../../../app/store.ts";

describe('Login Component', () => {
    it('submits the form with correct values', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        const emailInput = screen.getByLabelText('Email');
        const apiKeyInput = screen.getByLabelText('API Token');
        const loginButton = screen.getByText('Login');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(apiKeyInput, { target: { value: 'testApiKey' } });
        fireEvent.click(loginButton);

        // Assert that setApiKey action is dispatched with correct API key
        expect(store.getState().auth.apiKey).toBe('testApiKey');

        // Assert that navigation to '/news' is triggered
        expect(window.location.pathname).toBe('/news');
    });

    it('displays the link to get API token', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        const getApiTokenLink = screen.getByText('Get one here');
        expect(getApiTokenLink).toBeInTheDocument();
        expect(getApiTokenLink).toHaveAttribute('href', 'https://newsapi.org/register');
        expect(getApiTokenLink).toHaveAttribute('target', '_blank');
        expect(getApiTokenLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
