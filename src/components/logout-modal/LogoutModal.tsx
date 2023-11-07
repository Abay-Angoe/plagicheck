import { StyleLogoutModal } from './logoutModal.Styles';
import closeIcon from '../../assets/Plagiarism-close.svg';
import { useNavigate } from 'react-router';

interface LogoutModalProps {
  onClose: () => void;
}
const LogoutModal: React.FC<LogoutModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <StyleLogoutModal>
      <div className="container">
        <div className="logout-modal">
          <div className="logout">
            <h2>Log out</h2>
            <div className="close">
              <img src={closeIcon} onClick={onClose} alt="Close Icon" />
            </div>
          </div>
          <div className="description">
            <p>
              Are you sure you want to log out? By logging out, you will be
              securely logged out of the system and your session will be ended.
            </p>
          </div>
          <div className="logout-buttons">
            <button className="btn btn-secondary" onClick={onClose}>
              No
            </button>
            <button className="btn btn-error" onClick={handleLogout}>
              Yes log out
            </button>
          </div>
        </div>
      </div>
    </StyleLogoutModal>
  );
};

export default LogoutModal;
