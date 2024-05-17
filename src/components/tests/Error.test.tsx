import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Error from '../Error.tsx';

describe('Error Component', () => {
    const errorMessage = 'An error occurred.';

    it('renders error message correctly', () => {
        render(<Error message={errorMessage} />);
        const errorMessageElement = screen.getByText(errorMessage);
        expect(errorMessageElement).toBeInTheDocument();
    });

    it('renders with correct styles', () => {
        render(<Error message={errorMessage} />);
        const errorContainer = screen.getByRole('alert');
        expect(errorContainer).toHaveClass('bg-gray-100');
        expect(errorContainer).toHaveClass('border-red-300');
        expect(errorContainer).toHaveClass('rounded');
    });
});
