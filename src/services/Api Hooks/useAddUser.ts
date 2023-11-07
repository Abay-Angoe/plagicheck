import { useState } from 'react';
import { User } from './useFetchLecturerData';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface AddUserResult {
  success: boolean;
  error?: string;
  user?: User;
}

interface RequestBody {
  name: string;
  email: string;
  phoneNumber: string;
  departmentId?: number;
  qualification?: string;
}

export function useAddUser(endpoint: string) {
  const [loading, setLoading] = useState(false);

  const addUser = async (
    name: string,
    email: string,
    number: string,
    department?: string | number,
    qualification?: string
  ): Promise<AddUserResult> => {
    try {
      setLoading(true);

      const requestBody: RequestBody = {
        name: name,
        email: email,
        phoneNumber: number,
      };

      if (department !== undefined) {
        requestBody.departmentId = parseInt(department as string);
      }

      if (qualification !== undefined) {
        requestBody.qualification = qualification;
      }

      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const userData = await response.json();
        return { success: true, user: userData };
      } else {
        const data = await response.json();
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error('Error adding lecturer:', error);
      return {
        success: false,
        error: 'An error occurred while adding the lecturer',
      };
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading };
}
