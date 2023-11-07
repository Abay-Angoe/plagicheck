import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
const API_BASE_URL = '/document/upload';
interface DocumentData {
  file: File;
}

const useUploadDocument = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadDocument = async (facultyId: number, data: DocumentData) => {
    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('file', data.file);

      const response = await fetch(`${BASE_URL}${API_BASE_URL}/${facultyId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: formData,
      });
      console.log(formData);
      if (!response.ok) {
        throw new Error('Failed to upload document');
      }
      const responseData = await response.json();
      console.log(responseData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('An error occurred while uploading the document.');
    }
  };

  return { uploadDocument, isLoading, error };
};

export default useUploadDocument;
