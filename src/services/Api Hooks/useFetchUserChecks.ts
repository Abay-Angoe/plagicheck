import { useState, useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface CountData {
  failed: number;
  passed: number;
  total: number;
}

const useFetchUserChecks = () => {
  const [count, setCount] = useState<CountData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/plagiarism/user/checks`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: CountData = await response.json();
        setCount(result);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { count, loading, error };
};

export default useFetchUserChecks;
