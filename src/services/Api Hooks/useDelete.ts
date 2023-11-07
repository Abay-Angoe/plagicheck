import { useState, useCallback } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
interface DeleteHookResponse {
  isLoading: boolean;
  error: string | null;
  deleteItem: (id: number | string) => Promise<void>;
}

function useDelete(endpoint: string): DeleteHookResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteItem = useCallback(
    async (id: number | string) => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete item with ID ${id}`);
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    },
    [endpoint]
  );

  return { isLoading, error, deleteItem };
}

export default useDelete;
