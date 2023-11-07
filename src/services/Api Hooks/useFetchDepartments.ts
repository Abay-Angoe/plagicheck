import { useEffect, useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface Department {
  id: string;
  departmentName?: string;
  facultyName?: string;
}

export function useFetchDepartments(endpoint: string) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Department[] = await response.json();
        setDepartments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching department data:', error);
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [endpoint]);

  return { departments, loading };
}
