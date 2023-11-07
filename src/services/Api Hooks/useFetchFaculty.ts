import { useEffect, useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

export interface Faculty {
  id: number;
  facultyName: string;
  createdAt: string;
  updatedAt: string;
  departments: Department[];
}
interface Department {
  id: number;
  departmentName: string;
}

const useFetchFacultyData = () => {
  const [data, setData] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/faculty`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  return { data, loading };
};

export default useFetchFacultyData;
