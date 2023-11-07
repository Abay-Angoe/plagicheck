import { useState } from 'react';
import { wordIcon, txtIcon, pdfIcon, loadingIcon } from '../../../../assets';
import useFetchDocuments from '../../../../services/Api Hooks/useFetchDatabase';
import Pagination from '../../Partials/Pagination';

import { StyledContainer } from '../ManageUsers/tables/Table_styles';

interface UserTableProps {
  endpoint: string;
  id: string;
}

export const DatabaseTable: React.FC<UserTableProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, total } = useFetchDocuments(currentPage);

  const renderFileIcon = (fileExtension: string) => {
    const fileExtensionIcons: Record<string, string> = {
      docx: wordIcon,
      txt: txtIcon,
      pdf: pdfIcon,
    };

    const iconSrc = fileExtensionIcons[fileExtension.toLowerCase()];

    if (iconSrc) {
      return <img src={iconSrc} alt={`File Icon for ${fileExtension}`} />;
    } else {
      return null;
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(total / 8);

  // const showDeleteModal = (email: string) => {
  //   setUserEmail(email);
  //   setDeleteModal(!deleteModal);
  // };

  return (
    <StyledContainer>
      {loading ? (
        <div className="loader">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <div className="table-wrapper database-table">
          <table className="table">
            <thead>
              <tr>
                <th className="name">Project name</th>
                <th>Upload Date/Time</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              {data?.data
                .slice()
                .reverse()
                .map((row, idx) => {
                  const fileExtension = row.title.split('.').pop() || '';
                  return (
                    <tr key={idx}>
                      <td className="name">
                        {renderFileIcon(fileExtension)}
                        {row.title}
                      </td>
                      <td className="">{row.createdAt || '12/2/2020 10:45'}</td>
                      <td className="">{fileExtension}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pagesToShow={5}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </StyledContainer>
  );
};
