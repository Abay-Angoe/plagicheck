import React from 'react';
import { useState } from 'react';
import { AddLecturers } from './Add-users.tsx';
import { StyledAddUsers } from './Add-users';
import addUserIcon from '../../assets/add.svg';

interface AddUserBtnProps {
  title: string;
  endpoint: string;
  showOptionalFields: boolean;
  // AddLecturersComponent: React.ComponentType<AddUsersProps>; // Add this prop
}

const AddUserBtn: React.FC<AddUserBtnProps> = ({
  title,
  endpoint,
  showOptionalFields,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledAddUsers>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-primary adduser-btn"
        >
          {title}
          <img src={addUserIcon} alt="" className="plus" />
        </button>
        {modalOpen && (
          <AddLecturers
            closeModal={() => {
              setModalOpen(false);
            }}
            title={title}
            endpoint={endpoint}
            showOptionalFields={showOptionalFields}
          />
        )}
      </StyledAddUsers>
    </>
  );
};

export default AddUserBtn;
