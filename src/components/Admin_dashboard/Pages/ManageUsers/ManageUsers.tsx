import { useState } from 'react';
import '../../../../index.css';
import { StyledManageUsers } from './ManageUsers_styles';
import ManageUsersBar from './partials/ManageUsersBar';
import { UserTable } from './tables/Table';
const ManageUsers = () => {
  const apiUrl = '/lecturer';
  const [showUserTable, setShowUserTable] = useState(true);
  return (
    <>
      <StyledManageUsers>
        <div className="main">
          <ManageUsersBar
            title="Lecturers"
            endpoint={apiUrl}
            showOptionalFields={true}
            setShowUserTable={setShowUserTable}
            showUserTable={showUserTable}
          />
          <div className="content">
            {showUserTable && <UserTable endpoint={apiUrl} id="Staff Id" />}
            {!showUserTable && (
              <UserTable endpoint={'/student'} id="Student Id" />
            )}
          </div>
        </div>
      </StyledManageUsers>
    </>
  );
};

export default ManageUsers;
