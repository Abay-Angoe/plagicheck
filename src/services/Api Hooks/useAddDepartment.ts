import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
const API_URL = '/department';

export interface DepartmentData {
  departmentName: string;
  facultyId: number;
}

const useAddDepartment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addDepartment = async (data: DepartmentData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create department');
      }

      const responseData = await response.json();
      console.log(responseData);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred while creating the department.');
    }
  };

  return { addDepartment, isLoading, error };
};

export default useAddDepartment;
