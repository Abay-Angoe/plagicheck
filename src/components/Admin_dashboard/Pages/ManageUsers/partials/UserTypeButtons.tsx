import React from 'react';
import { StyledManageUsers } from '../ManageUsers_styles';

interface ButtonProps {
  title: string;
  handleClick?: () => void;
  defaultFocus?: boolean;
  isActive: boolean;
}

const UserTableButtons: React.FC<ButtonProps> = ({
  title,
  handleClick,
  defaultFocus,
  isActive,
}) => {
  return (
    <>
      <StyledManageUsers>
        <div className={`button-box ${isActive ? 'active' : ''}`}>
          <button
            className="table-btn"
            autoFocus={defaultFocus}
            onClick={handleClick}
          >
            {title}
          </button>
        </div>
      </StyledManageUsers>
    </>
  );
};

export default UserTableButtons;
