import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SortCategories from '../SortCategories';

const mockOnChange = jest.fn();

describe('SortCategories Component', () => {
    it('renders ISort component with correct options', () => {
        render(<SortCategories onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        expect(sortSelect).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options.length).toBe(7);
    });

    it('forwards onChange event to parent component', () => {
        render(<SortCategories onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        fireEvent.change(sortSelect, { target: { value: 'technology' } });

        expect(mockOnChange).toHaveBeenCalledWith('technology');
    });
});
