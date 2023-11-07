import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
const API_URL = '/schedule';

const useDeleteSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteSchedule = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}${API_URL}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to clear schedule');
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred while clearing the schedule.');
    }
  };

  return { deleteSchedule, isLoading, error };
};

export default useDeleteSchedule;
