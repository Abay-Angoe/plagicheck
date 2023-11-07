import { useState } from 'react';

const API_BASE_URL = '/api/schedule';

const useEditSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editSchedule = async (id: string, data: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to update schedule with ID ${id}`);
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred while updating the schedule.');
    }
  };

  return { editSchedule, isLoading, error };
};

export default useEditSchedule;
