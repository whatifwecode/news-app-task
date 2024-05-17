import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Logout from '../Logout';
import {store} from "../../../app/store.ts";

describe('Logout Component', () => {
    it('renders Logout button', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Logout />
                </Router>
            </Provider>
        );

        const logoutButton = screen.getByText('Logout');
        expect(logoutButton).toBeInTheDocument();
    });

    it('opens logout modal on button click', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Logout />
                </Router>
            </Provider>
        );

        const logoutButton = screen.getByText('Logout');
        fireEvent.click(logoutButton);

        const logoutModal = screen.getByText('Are you sure you want to logout?');
        expect(logoutModal).toBeInTheDocument();
    });

    it('closes logout modal on "No" button click', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Logout />
                </Router>
            </Provider>
        );

        const logoutButton = screen.getByText('Logout');
        fireEvent.click(logoutButton);

        const noButton = screen.getByText('No');
        fireEvent.click(noButton);

        const logoutModal = screen.queryByText('Are you sure you want to logout?');
        expect(logoutModal).not.toBeInTheDocument();
    });

    it('dispatches clearApiKey and navigates to "/" on "Yes" button click', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Logout />
                </Router>
            </Provider>
        );

        const logoutButton = screen.getByText('Logout');
        fireEvent.click(logoutButton);

        const yesButton = screen.getByText('Yes');
        fireEvent.click(yesButton);


        expect(store.getState().auth.apiKey).toBe(null);

        expect(window.location.pathname).toBe('/');
    });
});
