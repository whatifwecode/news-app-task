import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    it('renders input correctly', () => {
        render(<Input type="text" value="" onChange={() => {}} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange handler when input value changes', () => {
        const onChangeMock = jest.fn();
        render(<Input type="text" value="" onChange={onChangeMock} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('renders label correctly', () => {
        render(<Input type="text" value="" onChange={() => {}} label="Test Label" />);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

    it('renders placeholder correctly', () => {
        render(<Input type="text" value="" onChange={() => {}} placeholder="Test Placeholder" />);
        const inputElement = screen.getByPlaceholderText('Test Placeholder');
        expect(inputElement).toBeInTheDocument();
    });
});
