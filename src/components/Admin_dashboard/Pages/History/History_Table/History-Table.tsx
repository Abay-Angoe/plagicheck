import { StyledContainer } from '../../ManageUsers/tables/Table_styles';

import usePlagiarismHistory from '../../../../../services/Api Hooks/useFetchCheckerData';
import { useState } from 'react';
import Pagination from '../../../Partials/Pagination';
import { loadingIcon, noDataIcon } from '../../../../../assets';
import TableMoreBtn from '../../../Partials/More-btn/TableDropbtn';
import DeleteModal from '../../../../modals/DeleteModal';

interface UserTableProps {
  endpoint: string;
  id: string;
  showColumns: boolean;
}

export const HistoryTable: React.FC<UserTableProps> = ({
  showColumns,
  endpoint,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [scheduleId, setScheduleId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, total } = usePlagiarismHistory(
    `${endpoint}?page=${currentPage}`
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(total / 8);

  const showDeleteModal = (id: number) => {
    setScheduleId(id);
    setDeleteModal(!deleteModal);
  };

  return (
    <StyledContainer>
      {loading ? (
        <div className="loader">
          <img src={loadingIcon} alt="" />
        </div>
      ) : data && data.length > 0 ? (
        <div className="table-wrapper history-table">
          <table className="table">
            <thead>
              <tr>
                <th>Document name</th>
                <th>Date/Time</th>

                {showColumns && (
                  <>
                    <th>Department</th>
                    <th>Originality%</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {data
                .slice()
                .reverse()
                .map((row, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="name">{row.documentTitle || row.title}</td>
                      <td className="expand ">
                        <div className="dept">
                          {row.createdAt}
                          {!showColumns && (
                            <TableMoreBtn
                              openDelete={() => showDeleteModal}
                              openEdit={() => {}}
                              edit={false}
                            />
                          )}
                        </div>
                      </td>

                      {showColumns && (
                        <>
                          <td>{row.department.departmentName}</td>
                          <td>{row.originality}</td>
                        </>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {deleteModal && (
            <DeleteModal
              title="Delete User"
              content="Are you sure you want to delete? Please remember that this action cannot be undone."
              id={scheduleId}
              endpoint="/lecturers"
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
