import { render, screen } from '@testing-library/react';
import Loading from '../Loading';
import '@testing-library/jest-dom';

describe('Loading Component', () => {
    it('renders loading spinner correctly', () => {
        render(<Loading />);
        const spinnerElement = screen.getByRole('progressbar');
        expect(spinnerElement).toBeInTheDocument();
        expect(spinnerElement).toHaveClass('animate-spin');
        expect(spinnerElement).toHaveClass('rounded-full');
        expect(spinnerElement).toHaveClass('h-12');
        expect(spinnerElement).toHaveClass('w-12');
        expect(spinnerElement).toHaveClass('border-t-2');
        expect(spinnerElement).toHaveClass('border-b-2');
        expect(spinnerElement).toHaveClass('border-gray-900');
    });
});