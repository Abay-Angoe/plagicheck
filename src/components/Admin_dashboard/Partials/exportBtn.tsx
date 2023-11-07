// import { useState } from 'react';
// import SecondaryButton from '../Pages/plagiarism-check/partials/ButtonTemplate'
// import { saveAs } from 'file-saver';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import * as XLSX from 'xlsx';

// interface ExportBtnProps {
//   data: any[]; // Change the type to match your data structure
// }

// const ExportBtn: React.FC<ExportBtnProps> = ({ data }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleButtonClick = () => {
//       setIsOpen(!isOpen);
//     };

//   const handleExport = (format: 'PDF' | 'Excel') => {
//     setIsOpen(false);

//     if (format === 'PDF') {
//       const pdfData = (
//         <Document>
//           <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//               <Text>PDF Exported Data:</Text>
//               {data.map((item, index) => (
//                 <Text key={index}>{item}</Text>
//               ))}
//             </View>
//           </Page>
//         </Document>
//       );

//       const pdfBlob = pdfData.toBlob();
//       saveAs(pdfBlob, 'exported_data.pdf');
//     } else if (format === 'Excel') {
//       const ws = XLSX.utils.json_to_sheet(data);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, 'Exported Data');
//       const excelBlob = XLSX.write(wb, { bookType: 'xlsx' });
//       saveAs(new Blob([excelBlob], { type: 'application/octet-stream' }), 'exported_data.xlsx');
//     }
//   };

//   return (
//     <>
//         <SecondaryButton imgSrc='' title='' handleClick={handleButtonClick}/>
//         {isOpen && (
//         <div className="export-dropdown">
//           <button onClick={() => handleExport('PDF')}>Export as PDF</button>
//           <button onClick={() => handleExport('Excel')}>Export as Excel</button>
//         </div>
//         )}

//     </>
//   )
// }

// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });

// export default ExportBtn
