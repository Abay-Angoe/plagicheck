const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

function useUploadPicture() {
  const uploadFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${BASE_URL}/users/update/profile`, {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload the file');
      }
      return true;
    } catch (error) {
      console.error('File upload error:', error);
      return false;
    }
  };

  return { uploadFile };
}

export default useUploadPicture;
