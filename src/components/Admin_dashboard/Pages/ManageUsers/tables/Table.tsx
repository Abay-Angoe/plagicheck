import { StyledContainer } from './Table_styles';
import useFetchUserData from '../../../../../services/Api Hooks/useFetchLecturerData';

import {
  loadingIcon,
  noDataIcon,
  placeholderImage,
} from '../../../../../assets';

import { useState } from 'react';
import Pagination from '../../../Partials/Pagination';
import TableMoreBtn from '../../../Partials/More-btn/TableDropbtn';
import DeleteModal from '../../../../modals/DeleteModal';

interface UserTableProps {
  endpoint: string;
  id: string;
}

export const UserTable: React.FC<UserTableProps> = ({ endpoint, id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const { data, loading, total } = useFetchUserData(
    `${endpoint}?page=${currentPage}`
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(total / 8);
  const showQualifications = data.some((user) => user.qualification !== '');

  const showDeleteModal = (email: string) => {
    setUserEmail(email);
    setDeleteModal(!deleteModal);
  };

  return (
    <StyledContainer>
      {loading ? (
        <div className="loader">
          <img src={loadingIcon} alt="" />
        </div>
      ) : data && data.length > 0 ? (
        <div className="table-wrapper manage">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>{id}</th>
                <th>Phone Number</th>
                <th>Email</th>
                {showQualifications && (
                  <th className={showQualifications ? 'show' : 'hide'}>
                    Qualifications
                  </th>
                )}
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice()
                .reverse()
                .map((row, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="name">
                        <img
                          src={row.profilePicture || placeholderImage}
                          alt=""
                        />
                        {row.name}
                      </td>
                      <td className="expand">{row.staffId || row.studentId}</td>

                      <td>{row.phoneNumber}</td>
                      <td className="email-cell">
                        {row.email.length > 15 ? (
                          <>
                            <span className="truncated-email">
                              {row.email.slice(0, 15)}...
                            </span>
                          </>
                        ) : (
                          <span>{row.email}</span>
                        )}
                      </td>
                      {showQualifications && (
                        <td className="qualifications">{row.qualification}</td>
                      )}

                      <td className="dept">
                        {typeof row.department === 'object' ? (
                          <span>{row.department.departmentName}</span>
                        ) : (
                          <span>{row.department}</span>
                        )}
                        <TableMoreBtn
                          openDelete={() => showDeleteModal(row.email)}
                          openEdit={() => {}}
                          edit={false}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {deleteModal && (
            <DeleteModal
              title="Delete User"
              content="Are you sure you want to delete? Please remember that this action cannot be undone."
              id={userEmail}
              endpoint="/lecturer"
              closeModal={() => {
                setDeleteModal(false);
              }}
            />
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pagesToShow={9}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className="nodata">
          <img src={noDataIcon} alt="" />
          No data to display.
        </div>
      )}
    </StyledContainer>
  );
};
