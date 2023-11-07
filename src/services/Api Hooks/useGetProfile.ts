import { useState, useEffect } from 'react';

export interface UserProfile {
  id: number;
  email: string;
  staffId?: string;
  studentId?: string;
  phoneNumber: string;
  name: string;
  qualification?: string;
  departmentId: number;
  role: string;
  profilePicture: string | null;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/users/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (err) {
        setError('Failed to fetch user profile');
        console.error('Failed to fetch user profile:', err);
      }
    };

    fetchUserProfile();
  }, [BASE_URL]);

  return { profile, error };
};
