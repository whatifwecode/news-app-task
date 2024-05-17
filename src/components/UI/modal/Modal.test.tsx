import '@testing-library/jest-dom/';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
    it('renders modal correctly', () => {
        render(
            <Modal onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        );

        const modalElement = screen.getByText('Modal Content');
        expect(modalElement).toBeInTheDocument();
    });

    it('calls onClose handler when close button is clicked', () => {
        const onCloseMock = jest.fn();
        render(
            <Modal onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
