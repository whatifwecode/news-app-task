import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SortCountries from '../SortCountries';

const mockOnChange = jest.fn();

describe('SortCountries Component', () => {
    it('renders ISort component with correct props', () => {
        render(<SortCountries onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        expect(sortSelect).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options.length).toBe(54);
    });

    it('forwards onChange event to parent component', () => {
        render(<SortCountries onChange={mockOnChange} />);

        const sortSelect = screen.getByRole('combobox');
        fireEvent.change(sortSelect, { target: { value: 'us' } });

        expect(mockOnChange).toHaveBeenCalledWith('us');
    });
});
