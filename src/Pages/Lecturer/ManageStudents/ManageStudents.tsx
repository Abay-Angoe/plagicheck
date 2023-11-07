import ManageUsersBar from '../../../components/Admin_dashboard/Pages/ManageUsers/partials/ManageUsersBar';
import { StyledManageUsers } from '../../../components/Admin_dashboard/Pages/ManageUsers/ManageUsers_styles';
import { UserTable } from '../../../components/Admin_dashboard/Pages/ManageUsers/tables/Table';

const ManageStudents = () => {
  const apiUrl = `/student`;

  return (
    <>
      <StyledManageUsers>
        <div className="main">
          <ManageUsersBar
            title="Students"
            endpoint="/student"
            showOptionalFields={false}
            setShowUserTable={() => {}}
            showUserTable={false}
          />
          <div className="content">
            <UserTable endpoint={apiUrl} id="Student Id" />
          </div>
        </div>
      </StyledManageUsers>
    </>
  );
};

export default ManageStudents;
