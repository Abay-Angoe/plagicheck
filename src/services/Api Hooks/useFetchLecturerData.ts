import { useState, useEffect, useCallback } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface Department {
  departmentName: string;
  id: number;
  facultyId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  department: Department;
  staffId?: string;
  studentId?: string;
  profilePicture: string;
  qualification?: string;
}

const useFetchUserData = (endpoint: string) => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);

        setTotal(responseData.total);
        if (Array.isArray(responseData.data)) {
          setData(
            responseData.data.map((user: User) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              staffId: user.staffId,
              studentId: user.studentId,
              phoneNumber: user.phoneNumber,
              department: user.department ? user.department.departmentName : '',
              profileImageUrl: user.profilePicture,
              qualification: user.qualification || '',
            }))
          );
        } else {
          console.error('Data received is not an array:', responseData.data);
        }
      } else {
        console.error('Failed to fetch data:', response.status);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData, data]);

  return { data, loading, fetchData, total };
};

export default useFetchUserData;
