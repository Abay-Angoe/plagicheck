import { Result } from './useFileUpload';
import { useState } from 'react';
import { Content } from './useFileUpload';

export const useLecturerChecker = () => {
  const [uploadedFiles, setUploadedFiles] = useState<Array<Content>>([]);
  const [results, setResults] = useState<Array<Result>>([]);
  const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;

  const department = localStorage.getItem('department');

  const apiUrl = `${BASE_URL}/plagiarism/faculty?departmentId=${
    department === '0' ? 1 : department
  }`;

  const handleFileUpload = async (files: FileList | null) => {
    if (!files) return;

    const uploadedContentArray: Content[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileContent = await readFileContent(file);

      uploadedContentArray.push({
        title: file.name,
        content: fileContent,
      });
    }

    setUploadedFiles(uploadedContentArray);

    try {
      console.log('Files uploaded and data sent to the backend successfully.');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        event.target
          ? resolve(event.target.result as string)
          : reject(new Error('Failed to read file content.'));
      };
      reader.onerror = (event) => {
        reject(new Error('Error reading file: ' + event.target?.error));
      };
      reader.readAsText(file);
    });
  };

  const sendToBackend = async (data: {
    title: string;
    content: string;
    threshold: number | 0;
    facultyId: string[] | [];
  }) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify([data]),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the backend.');
      }
      const responseData = await response.json();
      setResults((prevUploadedFiles) => [
        ...prevUploadedFiles,
        ...responseData,
      ]);

      const code = responseData[0].code;
      localStorage.setItem('resultcode', code);
      return responseData[0].content;
    } catch (error) {
      throw new Error('Error sending data to the backend: ' + error);
    }
  };

  return {
    uploadedFiles,
    handleFileUpload,
    results,
    setUploadedFiles,
    sendToBackend,
  };
};
