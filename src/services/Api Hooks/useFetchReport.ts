import { useState, useEffect } from 'react';

interface PlagiarismHistoryItem {
  id: number;
  code: string;
  documentTitle: string;
  userId: number;
  departmentId: number;
  originality: number;
  similarity: number;
  passed: boolean;
  createdAt: string;
  detail: PlagiarismDetail[];
}

interface PlagiarismDetail {
  title: string;
  source: string;
  faculty: string;
  similarity: number;
  documentUrl: string;
  documentTitle: string;
}

const usePlagiarismHistory = () => {
  const [plagiarismHistory, setPlagiarismHistory] = useState<
    PlagiarismHistoryItem[]
  >([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
  const code = localStorage.getItem('resultcode');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token is missing.');
        }

        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await fetch(`${BASE_URL}/plagiarism/history/${code}`, {
          headers,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);

        setPlagiarismHistory(data);
        data.data = data.data.map((item: { createdAt: string }) => {
          return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleString(),
          };
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL, code]);

  return { plagiarismHistory, loading };
};

export default usePlagiarismHistory;
