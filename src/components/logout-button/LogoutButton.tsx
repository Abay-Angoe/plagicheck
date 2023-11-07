import { useState } from 'react';

import { StyleLogoutButton } from '../logout-button/LogoutButton.Styles';
import { logoutIcon, logoutIconRed } from '../../assets';
import LogoutModal from '../logout-modal/LogoutModal';

const LogoutButton = () => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <StyleLogoutButton>
        <div className="logout">
          <button
            className="logout-btn"
            onClick={() => setModalOpen(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={isHovered ? logoutIconRed : logoutIcon}
              className="logout-icon"
              alt="Logout Icon"
            />
            Log out
          </button>
          {modalOpen && <LogoutModal onClose={() => setModalOpen(false)} />}
        </div>
      </StyleLogoutButton>
    </div>
  );
};

export default LogoutButton;
