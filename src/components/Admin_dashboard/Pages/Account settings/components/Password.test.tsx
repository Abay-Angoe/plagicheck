import { render, fireEvent, waitFor } from '@testing-library/react';
import Password from './Password';

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

jest.mock('../../../../../services/Api Hooks/useUpdatePassword', () => ({
  useChangePassword: () => ({
    changePassword: jest.fn(),
    error: '',
    isPasswordChanged: false,
  }),
}));

test('renders the Password component', () => {
  const { getByText, getByLabelText } = render(<Password />);
  expect(getByText('Password')).toBeInTheDocument();
  expect(getByLabelText('Old Password')).toBeInTheDocument();
  expect(getByLabelText('New Password')).toBeInTheDocument();
  expect(getByLabelText('Confirm Password')).toBeInTheDocument();
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(getByText('Save Changes')).toBeInTheDocument();
});

test('handles input change', () => {
  const { getByLabelText } = render(<Password />);
  const oldPasswordInput = getByLabelText('Old Password');
  const newPasswordInput = getByLabelText('New Password');
  const confirmPasswordInput = getByLabelText('Confirm Password');

  fireEvent.change(oldPasswordInput, { target: { value: 'oldPassword123' } });
  fireEvent.change(newPasswordInput, { target: { value: 'newPassword456' } });
  fireEvent.change(confirmPasswordInput, {
    target: { value: 'newPassword456' },
  });

  expect(oldPasswordInput).toHaveValue('oldPassword123');
  expect(newPasswordInput).toHaveValue('newPassword456');
  expect(confirmPasswordInput).toHaveValue('newPassword456');
});

test('handles form submission and displays success message', async () => {
  const { getByText } = render(<Password />);
  const saveChangesButton = getByText('Save Changes');

  fireEvent.click(saveChangesButton);

  // You can use waitFor to assert that the success toast message is displayed
  await waitFor(() => {
    expect(
      document.querySelector('.Toastify__toast--success')
    ).toBeInTheDocument();
  });
});

test('handles form submission and displays error message', async () => {
  // Mock a failure scenario by having useChangePassword return an error
  jest.mock('../../../../../services/Api Hooks/useUpdatePassword', () => ({
    useChangePassword: () => ({
      changePassword: jest
        .fn()
        .mockRejectedValue(new Error('Password change failed')),
      error: 'Password change failed',
      isPasswordChanged: false,
    }),
  }));

  const { getByText } = render(<Password />);
  const saveChangesButton = getByText('Save Changes');

  fireEvent.click(saveChangesButton);

  // You can use waitFor to assert that the error toast message is displayed
  await waitFor(() => {
    expect(
      document.querySelector('.Toastify__toast--error')
    ).toBeInTheDocument();
  });
});
