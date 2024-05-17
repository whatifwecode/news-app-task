import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SortPopularity from '../SortPopularity';

const mockOnChange = jest.fn();

describe('SortPopularity Component', () => {
    it('renders ISort component with correct props', () => {
        render(<SortPopularity onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        expect(sortSelect).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options.length).toBe(3);
    });

    it('forwards onChange event to parent component', () => {
        render(<SortPopularity onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        fireEvent.change(sortSelect, { target: { value: 'relevancy' } });

        expect(mockOnChange).toHaveBeenCalledWith('relevancy');
    });
});
