import { useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import * as mammoth from 'mammoth';
export interface Match {
  startIndex: number;
  endIndex: number;
}

export interface Detail {
  documentTitle: string;
  similarity: number;
  title: string;
  matches: Match[];
}

export interface Result {
  createdAt: string | '';
  departmentId: number | 0;
  detail: Detail[];
  similarity: number | 0;
  source: string | '';
  title: string | '';
  userId: number | 0;
  documentTitle: string;
  originality: string;
}

export interface Content {
  title?: string;
  content: string;
}

export const useFileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<Array<Content>>([]);
  const [results, setResults] = useState<Array<Result>>([]);
  const BASE_URL = import.meta.env.VITE_PLAGICHECK_BASE_URL;
  const apiUrl = `${BASE_URL}/plagiarism/bulk`;

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
      reader.onload = async (event) => {
        const content: string | ArrayBuffer = event.target?.result || '';
        const fileType = file.type;

        if (fileType === 'application/pdf') {
          try {
            const pdfData = new Uint8Array(content as ArrayBuffer);
            const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
            const numPages = pdf.numPages;
            let pdfText = '';

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
              const page = await pdf.getPage(pageNum);
              const textContent = await page.getTextContent();
              let pageText = '';

              for (const item of textContent.items) {
                if (item) {
                  pageText += item;
                }
              }

              pdfText += pageText;
            }

            resolve(pdfText);
          } catch (error) {
            reject(new Error('Error reading PDF: ' + error));
          }
        } else if (
          fileType === 'application/msword' ||
          fileType ===
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
          try {
            const result = await mammoth.extractRawText({
              arrayBuffer: content as ArrayBuffer,
            });
            resolve(result.value);
          } catch (error) {
            reject(new Error('Error reading Word document: ' + error));
          }
        } else {
          if (typeof content === 'string') {
            resolve(content);
          } else if (content instanceof ArrayBuffer) {
            const textDecoder = new TextDecoder('utf-8');
            const text = textDecoder.decode(new Uint8Array(content));
            resolve(text);
          } else {
            reject(new Error('Unsupported file type.'));
          }
        }
      };

      reader.onerror = (event) => {
        reject(new Error('Error reading file: ' + event.target?.error));
      };

      if (
        file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    });
  };
  const sendToBackend = async (data: { title: string; content: string }) => {
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
