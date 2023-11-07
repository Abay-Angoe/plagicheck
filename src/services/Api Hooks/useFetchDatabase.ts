import { useState, useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
interface Document {
  id: number;
  title: string;
  documentType: string;
  documentUrl: string;
  content: string;
  createdAt: string;
  faculty: {
    id: number;
    facultyName: string;
  };
}

interface ApiResponse {
  data: Document[];
  page: number;
  total: number;
}

const useFetchDocuments = (page: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        const response = await fetch(`${BASE_URL}/document/get/${page}/8`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
        setTotal(responseData.total);
        setError(null);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [page]);

  return { loading, error, data, total };
};

export default useFetchDocuments;
