import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
const API_URL = '/faculty';

export interface FacultyData {
  facultyName: string;
}

const useEditFaculty = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editFaculty = async (data: FacultyData) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(data);
      const response = await fetch(`${BASE_URL}${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create faculty');
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred while creating the faculty.');
    }
  };

  return { editFaculty, isLoading, error };
};

export default useEditFaculty;
