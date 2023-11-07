// import React, { useState } from 'react';
// import FileUploadButton from './FileUploadBtn';
// import TextArea from './partials/TextArea';

// import mammoth from 'mammoth';
// // import * as pdfjs from 'pdfjs-dist/build/pdf';
// // import * as pdfjs from 'pdfjs-dist/webpack';

// interface FileUploadAreaProps {
//   onChange: (file: File) => void;
// }

// const FileUploadArea: React.FC<FileUploadAreaProps> = ({ onChange }) => {
//   const [content, setContent] = useState<string>('');
//   const [title, setTitle] = useState<string>('');

//   // const extractTextFromPDF = async (fileData: ArrayBuffer) => {
//   //   try {
//   //     const pdf = await pdfjs.getDocument({ data: fileData }).promise;
//   //     const numPages = pdf.numPages;
//   //     let pdfText = '';

//   //     for (let pageNum = 1; pageNum <= numPages; pageNum++) {
//   //       const page = await pdf.getPage(pageNum);
//   //       const content = await page.getTextContent();
//   //       content.items.forEach((item: { str: string; }) => {
//   //         pdfText += item.str + ' ';
//   //       });
//   //     }

//   //     return pdfText.trim();
//   //   } catch (error) {
//   //     console.error('Error extracting text from PDF:', error);
//   //     throw error;
//   //   }
//   // };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = async (e) => {
//         const arrayBuffer = e.target?.result as ArrayBuffer;

//         if (file.type === 'application/pdf') {
//           // try {
//           //   const pdfText = await extractTextFromPDF(arrayBuffer);
//           //   setContent(pdfText);
//           //   setTitle(file.name);
//           //   onChange(file);
//           // } catch (error) {
//           // }
//           console.log('hello');
//         } else if (
//           file.type === 'application/msword' ||
//           file.type ===
//             'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//         ) {
//           const result = await mammoth.extractRawText({
//             arrayBuffer: arrayBuffer,
//           });
//           setContent(result.value);
//           setTitle(file.name);
//           onChange(file);
//         } else {
//           const result = e.target?.result as string;
//           setContent(result);
//           setTitle(file.name);
//           onChange(file);
//         }
//       };

//       reader.readAsArrayBuffer(file);
//     }
//   };

//   return (
//     <div className="text">
//       <TextArea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Type or upload pdf, txt, or ms word here"
//       />
//       <FileUploadButton
//         onFileChange={handleFileChange}
//         title={title}
//         content={content}
//       />
//     </div>
//   );
// };

// export default FileUploadArea;
