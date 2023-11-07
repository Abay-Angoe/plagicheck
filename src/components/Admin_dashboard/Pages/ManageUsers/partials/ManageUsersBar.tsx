import { useState } from 'react';
import AddUserBtn from '../../../../add-users/AddUserBtn';

import BulkPageBtn from '../../../../bulk-upload/BulkPageBtn';
import Filter from './Filter';

import UserTableButtons from './UserTypeButtons';

interface UserBarProps {
  title: string;
  endpoint: string;
  showOptionalFields: boolean;
  setShowUserTable: React.Dispatch<React.SetStateAction<boolean>>;
  showUserTable: boolean;
}

const ManageUsersBar: React.FC<UserBarProps> = ({
  title,
  endpoint,
  showOptionalFields,
  setShowUserTable,
  showUserTable,
}) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  return (
    <>
      <div className="bars">
        <div className="bar">
          <div className="left">
            {showOptionalFields && (
              <UserTableButtons
                title="Lecturers"
                defaultFocus={true}
                isActive={activeButton === 'Lecturers'}
                handleClick={() => {
                  setActiveButton('Lecturers');
                  setShowUserTable(true);
                }}
              />
            )}
            <UserTableButtons
              title="Students"
              isActive={activeButton === 'Students'}
              handleClick={() => {
                setActiveButton('Students');
                setShowUserTable(false);
              }}
            />
          </div>
          <div className="right">
            <Filter />

            <div className="add-btn">
              <BulkPageBtn />
              {showUserTable && (
                <AddUserBtn
                  title={`Add ${title}`}
                  endpoint={endpoint}
                  showOptionalFields={showOptionalFields}
                />
              )}
              {!showUserTable && (
                <AddUserBtn
                  title="Add Students"
                  endpoint="/student"
                  showOptionalFields={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsersBar;
