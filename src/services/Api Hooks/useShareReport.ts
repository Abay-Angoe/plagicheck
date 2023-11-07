import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

const usePlagiarismShare = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sharePlagiarism = async (
    code: string,
    emailList: { email: string }[]
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/plagiarism/share/${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(emailList),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // const data = await response.json();
    } catch (error) {
      setError;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sharePlagiarism };
};

export default usePlagiarismShare;
