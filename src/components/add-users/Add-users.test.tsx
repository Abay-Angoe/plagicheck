import { render, fireEvent, waitFor } from '@testing-library/react';
import { AddLecturers, AddUsersProps } from './Add-users.tsx';

const mockAddUser = jest.fn();
const mockFetchData = jest.fn();
const mockCloseModal = jest.fn();

const defaultProps: AddUsersProps = {
  closeModal: mockCloseModal,
  title: 'Add Lecturer',
  endpoint: '/lecturers',
  showOptionalFields: true,
};

beforeEach(() => {
  mockAddUser.mockResolvedValue({ success: true });
  mockFetchData.mockResolvedValue([]);
});

test('renders the component with required fields', () => {
  const { getByText, getByLabelText } = render(
    <AddLecturers {...defaultProps} />
  );

  expect(getByText('Add Lecturer')).toBeInTheDocument();
  expect(getByLabelText('Full name *')).toBeInTheDocument();
  expect(getByLabelText('Email address *')).toBeInTheDocument();
  expect(getByLabelText('Phone number *')).toBeInTheDocument();
  expect(getByLabelText('Department *')).toBeInTheDocument();
  expect(getByLabelText('Qualification *')).toBeInTheDocument();
});

test('submits the form with valid input', async () => {
  const { getByText, getByLabelText } = render(
    <AddLecturers {...defaultProps} />
  );

  fireEvent.change(getByLabelText('Full name *'), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(getByLabelText('Email address *'), {
    target: { value: 'johndoe@gmail.com' },
  });
  fireEvent.change(getByLabelText('Phone number *'), {
    target: { value: '+475 23 409 7399' },
  });
  fireEvent.change(getByLabelText('Department *'), {
    target: { value: 'Engineering' },
  });
  fireEvent.change(getByLabelText('Qualification *'), {
    target: { value: 'PhD' },
  });

  fireEvent.click(getByText('Add'));

  await waitFor(() => {
    expect(mockAddUser).toHaveBeenCalledWith(
      'John Doe',
      'johndoe@gmail.com',
      '+475 23 409 7399',
      'Engineering',
      'PhD'
    );
    expect(mockFetchData).toHaveBeenCalled();
    expect(mockCloseModal).toHaveBeenCalled();
  });
});

test('displays an error message for invalid input', async () => {
  const { getByText } = render(<AddLecturers {...defaultProps} />);

  fireEvent.click(getByText('Add'));

  await waitFor(() => {
    expect(mockAddUser).not.toHaveBeenCalled();
    expect(
      getByText('Please fill in all the required fields')
    ).toBeInTheDocument();
  });
});
