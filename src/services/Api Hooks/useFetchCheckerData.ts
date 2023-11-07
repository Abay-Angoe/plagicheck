import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface Department {
  id: number;
  departmentName: string;
}

interface PlagiarismHistoryData {
  data:
    | {
        id: number;
        documentTitle: string;
        title: string;
        originality: number;
        similarity: number;
        passed: boolean;
        createdAt: string;
        department: Department;
      }[]
    | null;
  loading: boolean;
  error: Error | null;
  total: number;
}

const usePlagiarismHistory = (endpoint: string): PlagiarismHistoryData => {
  const [data, setData] = useState<PlagiarismHistoryData['data']>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setTotal(result.total);

        result.data = result.data.map(
          (item: { createdAt: string | number | Date }) => {
            return {
              ...item,
              createdAt: new Date(item.createdAt).toLocaleString(),
            };
          }
        );
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error, total };
};

export default usePlagiarismHistory;
