import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../Search';
import '@testing-library/jest-dom';

describe('Search Component', () => {
    it('renders input field correctly', () => {
        const mockOnSearch = jest.fn();
        render(<Search onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Search articles...');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('value', '');
    });

    it('calls onSearch function with correct query when input value changes', () => {
        const mockOnSearch = jest.fn();
        render(<Search onSearch={mockOnSearch} />);

        const inputElement = screen.getByPlaceholderText('Search articles...');
        fireEvent.change(inputElement, { target: { value: 'test query' } });

        expect(mockOnSearch).toHaveBeenCalledWith('test query');
    });
});
