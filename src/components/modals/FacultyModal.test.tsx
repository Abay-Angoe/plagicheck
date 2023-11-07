import { render, fireEvent, waitFor } from '@testing-library/react';
import InputModal, { ModalProps } from './InputModal';

const mockCloseModal = jest.fn();

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

const initialProps: ModalProps = {
  closeModal: mockCloseModal,
};

test('renders the input modal', () => {
  const { getByText, getByLabelText } = render(
    <InputModal {...initialProps} />
  );

  expect(getByText('Add faculty')).toBeInTheDocument();
  expect(getByLabelText('Faculty name')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(getByText('Add')).toBeInTheDocument();
});

test('handles input change', () => {
  const { getByLabelText } = render(<InputModal {...initialProps} />);
  const input = getByLabelText('Faculty name');

  fireEvent.change(input, { target: { value: 'New Faculty' } });

  expect(input).toHaveValue('New Faculty');
});

test('handles add faculty', async () => {
  const { getByLabelText, getByText } = render(
    <InputModal {...initialProps} />
  );
  const input = getByLabelText('Faculty name');
  const addBtn = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Faculty' } });

  fireEvent.click(addBtn);

  // You can use waitFor to assert that the toast message is displayed
  await waitFor(() => {
    expect(mockCloseModal).toHaveBeenCalledTimes(1); // Ensure closeModal was called
    expect(mockCloseModal).toHaveBeenCalledWith(); // You can provide specific arguments if needed
    expect(
      document.querySelector('.Toastify__toast--success')
    ).toBeInTheDocument();
  });
});

test('handles add faculty failure', async () => {
  // Mock a failure scenario by having useAddFaculty return a rejected promise

  const mockUseAddFaculty = jest.fn();
  mockUseAddFaculty.mockRejectedValueOnce(new Error('Failed to add faculty'));

  jest.mock('../../services/Api Hooks/useAddFaculty', () => ({
    useAddFaculty: mockUseAddFaculty,
  }));

  const { getByLabelText, getByText } = render(
    <InputModal {...initialProps} />
  );
  const input = getByLabelText('Faculty name');
  const addBtn = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Faculty' } });

  fireEvent.click(addBtn);

  // You can use waitFor to assert that the error toast message is displayed
  await waitFor(() => {
    expect(mockCloseModal).not.toHaveBeenCalled(); // Ensure closeModal was not called
    expect(
      document.querySelector('.Toastify__toast--error')
    ).toBeInTheDocument();
  });
});
