import '@testing-library/jest-dom/';
import { render, fireEvent, screen } from '@testing-library/react';
import Sort from './Sort';

describe('Sort Component', () => {
    const options = [
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending' }
    ];

    const defaultValue = 'asc';

    it('renders ISort correctly', () => {
        render(
            <Sort
                options={options}
                defaultValue={defaultValue}
                onChange={() => {}}
                label="Sort By:"
            />
        );

        const labelElement = screen.getByText('Sort By:');
        expect(labelElement).toBeInTheDocument();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();

        expect(selectElement).toHaveValue('asc');
    });

    it('calls onChange handler when option is selected', () => {
        const onChangeMock = jest.fn();
        render(
            <Sort
                options={options}
                defaultValue={defaultValue}
                onChange={onChangeMock}
                label="Sort By:"
            />
        );

        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: 'desc' } });

        expect(onChangeMock).toHaveBeenCalledWith('desc');
    });
});
