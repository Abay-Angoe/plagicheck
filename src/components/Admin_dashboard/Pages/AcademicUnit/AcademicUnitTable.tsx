import { StyledContainer } from '../ManageUsers/tables/Table_styles';
import useFetchFacultyData from '../../../../services/Api Hooks/useFetchFaculty';
import { loadingIcon, noDataIcon } from '../../../../assets';
import { useState } from 'react';
import TableMoreBtn from '../../Partials/More-btn/TableDropbtn';
import DeleteModal from '../../../modals/DeleteModal';
import EditFaculty from '../../../modals/EditFaculty';
import EditDepartment from '../../../modals/EditDepartment';

interface UserTableProps {
  id: string;
}

export const AcademicTable: React.FC<UserTableProps> = () => {
  const { data, loading } = useFetchFacultyData();
  const maxDisplayedDepartments = 2;
  const [showAllDepartments, setShowAllDepartments] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteDepartment, setDeleteDepartment] = useState(false);
  const [facultyId, setFacultyId] = useState<number>(0);
  const [departmentId, setDepartmentId] = useState<number>(0);

  const [departmentDropdown, setDepartmentDropdown] = useState<number | null>(
    null
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  const handleFacultyDelete = (id: number) => {
    setFacultyId(id);
    setDeleteModal(!deleteModal);
  };

  const handleDepartmentDelete = (id: number) => {
    setDepartmentId(id);
    setShowDropdown(false);
    setDeleteDepartment(!deleteModal);
  };

  const handledropdown = (id: number) => {
    setDepartmentDropdown(id);
    setShowDropdown(true);
  };

  const handleEditDepartment = (id: number) => {
    setDepartmentId(id);
    setShowDropdown(false);
    setDepartmentModalOpen(true);
  };

  const handleEditFaculty = (id: number) => {
    setFacultyId(id);
    setModalOpen(true);
  };

  return (
    <StyledContainer>
      {loading ? (
        <div className="loader">
          <img src={loadingIcon} alt="" />
        </div>
      ) : data && data.length > 0 ? (
        <div className="table-wrapper academic-table">
          <table className="table">
            <thead>
              <tr>
                <th>Faculty name</th>
                <th>Departments</th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice()
                .reverse()
                .map((row, idx) => {
                  const departmentsToDisplay = showAllDepartments
                    ? row.departments
                    : row.departments.slice(0, maxDisplayedDepartments);

                  return (
                    <tr key={idx}>
                      <td className="name">{row.facultyName}</td>
                      <td className="expand">
                        <div className="dept">
                          <ul>
                            {departmentsToDisplay.map((department) => (
                              <li
                                className="department"
                                key={department.id}
                                onClick={() => handledropdown(department.id)}
                              >
                                {department.departmentName}
                                {departmentDropdown === department.id &&
                                  showDropdown && (
                                    <div className="department-dropdown">
                                      <button
                                        onClick={() =>
                                          handleEditDepartment(department.id)
                                        }
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleDepartmentDelete(department.id)
                                        }
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  )}
                              </li>
                            ))}
                            <li>
                              {row.departments.length >
                                maxDisplayedDepartments && (
                                <button
                                  className="show-more-btn"
                                  onClick={() =>
                                    setShowAllDepartments(!showAllDepartments)
                                  }
                                >
                                  {showAllDepartments
                                    ? 'Show Less'
                                    : `+${
                                        row.departments.length -
                                        maxDisplayedDepartments
                                      }`}
                                </button>
                              )}
                            </li>
                          </ul>
                          <TableMoreBtn
                            edit={true}
                            openDelete={() => handleFacultyDelete(row.id)}
                            openEdit={() => handleEditFaculty(row.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {deleteModal && (
            <DeleteModal
              title="Delete Faculty"
              content="Are you sure you want to delete? Please remember that this action cannot be undone."
              id={facultyId}
              endpoint="/faculty"
              closeModal={() => {
                setDeleteModal(false);
              }}
            />
          )}

          {deleteDepartment && (
            <DeleteModal
              title="Delete Department"
              content="Are you sure you want to delete? Please remember that this action cannot be undone."
              id={departmentId}
              endpoint="/department"
              closeModal={() => {
                setDeleteDepartment(false);
              }}
            />
          )}

          {departmentModalOpen && (
            <EditDepartment
              id={departmentId}
              closeModal={() => {
                setDepartmentModalOpen(false);
              }}
            />
          )}
          {modalOpen && (
            <EditFaculty
              id={facultyId}
              closeModal={() => {
                setModalOpen(false);
              }}
            />
          )}
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
