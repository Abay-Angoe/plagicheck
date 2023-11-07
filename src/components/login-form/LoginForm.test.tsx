import { render, fireEvent, waitFor, act } from '@testing-library/react';
import LoginForm from './LoginForm';

const mockNavigate = jest.fn();
const mockToast = jest.fn();
const mockSetIsLoading = jest.fn();

jest.mock('react-toastify', () => ({
  toast: mockToast,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

const initialProps = {
  name: 'Name',
  loginPassword: 'Password',
  remember: 'Remember Me',
  forgotPassword: 'Forgot Password',
  submit: '',
  setIsloading: mockSetIsLoading,
};

test('renders the login form', () => {
  const { getByLabelText, getByText } = render(<LoginForm {...initialProps} />);

  expect(getByLabelText('Your email or staff ID')).toBeInTheDocument();
  expect(getByLabelText('Type your password here')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
});

test('handles form submission and successful login', async () => {
  const { getByLabelText, getByText } = render(<LoginForm {...initialProps} />);

  mockNavigate.mockReturnValueOnce(() => {});
  mockToast.mockReturnValueOnce({ type: 'success' });

  fireEvent.change(getByLabelText('Your email or staff ID'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(getByLabelText('Type your password here'), {
    target: { value: 'password123' },
  });

  await act(async () => {
    fireEvent.click(getByText('Login'));
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith('Login successful', {
        type: 'success',
      });
      expect(mockNavigate).toHaveBeenCalledWith('/student');
    });
  });
});

test('handles form submission and displays an error message for invalid login', async () => {
  const { getByLabelText, getByText } = render(<LoginForm {...initialProps} />);
  const errorResponse = {
    response: { data: 'Invalid Credentials' },
  };
  mockNavigate.mockReturnValueOnce(() => {});
  mockToast.mockReturnValueOnce({ type: 'error' });

  fireEvent.change(getByLabelText('Your email or staff ID'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(getByLabelText('Type your password here'), {
    target: { value: 'invalidpassword' },
  });

  await act(async () => {
    mockNavigate.mockClear();
    mockToast.mockClear();
    mockToast.mockRejectedValueOnce(errorResponse);

    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith('Invalid Credentials', {
        type: 'error',
      });
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
