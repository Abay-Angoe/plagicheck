import { render, fireEvent, waitFor } from '@testing-library/react';
import DepartmentModal from './addDepartmentModal';

const mockCloseModal = jest.fn();

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

const initialProps = {
  closeModal: mockCloseModal,
};

test('renders the department modal', () => {
  const { getByText, getByLabelText } = render(
    <DepartmentModal {...initialProps} />
  );

  expect(getByText('Add department')).toBeInTheDocument();
  expect(getByLabelText('Department name')).toBeInTheDocument();
  expect(getByText('Select faculty')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(getByText('Add')).toBeInTheDocument();
});

test('handles input change', () => {
  const { getByLabelText } = render(<DepartmentModal {...initialProps} />);
  const input = getByLabelText('Department name');

  fireEvent.change(input, { target: { value: 'New Department' } });

  expect(input).toHaveValue('New Department');
});

test('handles add department', async () => {
  const { getByLabelText, getByText } = render(
    <DepartmentModal {...initialProps} />
  );
  const input = getByLabelText('Department name');
  const addBtn = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Department' } });

  fireEvent.click(addBtn);

  await waitFor(() => {
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
    expect(mockCloseModal).toHaveBeenCalledWith();
    expect(
      document.querySelector('.Toastify__toast--success')
    ).toBeInTheDocument();
  });
});

test('handles add department failure', async () => {
  const mockUseAddDepartment = jest.fn();
  mockUseAddDepartment.mockRejectedValueOnce(
    new Error('Failed to add department')
  );

  jest.mock('../../services/Api Hooks/useAddDepartment', () => ({
    useAddDepartment: mockUseAddDepartment,
  }));

  const { getByLabelText, getByText } = render(
    <DepartmentModal {...initialProps} />
  );
  const input = getByLabelText('Department name');
  const addBtn = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Department' } });

  fireEvent.click(addBtn);

  await waitFor(() => {
    expect(mockCloseModal).not.toHaveBeenCalled();
    expect(
      document.querySelector('.Toastify__toast--error')
    ).toBeInTheDocument();
  });
});
