import React, { useState } from 'react';
import closeIcon from '../../assets/Plagiarism-close.svg';
import { StyledModal } from './Modal_styles';
import useLecturerData from '../../services/Api Hooks/useFetchLecturerEmail';
import { copyIcon, linkIcon, searchIcon } from '../../assets';
import usePlagiarismShare from '../../services/Api Hooks/useShareReport';

interface ModalProps {
  handleModal: () => void;
  closeModal: () => void;
}

const ShareModal: React.FC<ModalProps> = ({ closeModal }) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const { lecturerData } = useLecturerData();
  const { sharePlagiarism } = usePlagiarismShare();

  const filteredLecturerData = lecturerData.filter((user) => {
    const searchTerm = searchInput.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  });

  const toggleUserSelection = (email: string) => {
    if (selectedUsers.includes(email)) {
      setSelectedUsers(selectedUsers.filter((user) => user !== email));
    } else {
      setSelectedUsers([...selectedUsers, email]);
    }
  };

  const code = localStorage.getItem('resultcode') || '';
  const emailList = selectedUsers.map((email) => ({ email }));
  console.log(emailList);

  const handleShareClick = () => {
    sharePlagiarism(code, emailList);
  };

  return (
    <>
      <StyledModal>
        <div className="modal share">
          <div className="modal-tile">
            <div className="title">
              <h1>Share report</h1>

              <img src={closeIcon} alt="" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <p>Share by Email</p>
            </div>
            <div className="users">
              <img src={searchIcon} alt="" className="search" />
              <input
                type="search"
                placeholder="Search lecturer by name or email"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {filteredLecturerData.map((user, index) => (
                <div className="check" key={index}>
                  <input
                    type="checkbox"
                    id={`userCheckbox${index}`}
                    checked={selectedUsers.includes(user.email)}
                    onChange={() => toggleUserSelection(user.email)}
                  />
                  <label htmlFor={`userCheckbox${index}`}>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                  </label>
                </div>
              ))}
            </div>

            <div className="link">
              <img src={linkIcon} className="link-icon" alt="" />
              <input type="text" disabled />
              <button title="copy">
                <img src={copyIcon} alt="" />
              </button>
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal} className="btn-secondary">
                Cancel
              </button>
              <button onClick={handleShareClick} className="btn-primary">
                Share
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default ShareModal;
