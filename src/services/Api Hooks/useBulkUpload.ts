import { useState } from 'react';
const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

interface BulkUploadResult {
  success: boolean;
  error?: string;
}

export function useBulkUpload(endpoint: string) {
  const [loading, setLoading] = useState(false);

  const uploadFile = async (file: File): Promise<BulkUploadResult> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        return { success: true };
      } else {
        const data = await response.json();
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error('Error adding upload:', error);
      return {
        success: false,
        error: 'An error occurred while adding the upload',
      };
    } finally {
      setLoading(false);
    }
  };

  return { uploadFile, loading };
}
