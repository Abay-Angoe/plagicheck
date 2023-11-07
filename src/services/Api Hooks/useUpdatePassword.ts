import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface ChangePasswordData {
  oldPassword: string;
  password: string;
  comfirmedPassword: string;
}

export const useChangePassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);

  const changePassword = async (data: ChangePasswordData) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Password change failed');
      }
      setIsPasswordChanged(true);
    } catch (err) {
      setError(`Password must have a number, symbol and an upper case`);
    }
  };

  return { changePassword, error, isPasswordChanged };
};
