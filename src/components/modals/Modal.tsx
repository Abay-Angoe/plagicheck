import React from 'react';
import closeIcon from '../../assets/Plagiarism-close.svg';
import { StyledModal } from './Modal_styles';

interface ModalProps {
  title: string;
  content: string;
  handleModal: () => void;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  handleModal,
  closeModal,
}) => {
  return (
    <>
      <StyledModal>
        <div className="modal">
          <div className="modal-tile">
            <div className="title">
              <h1>{title}</h1>

              <img src={closeIcon} alt="" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <p>{content}</p>
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal} className="btn-secondary">
                No
              </button>
              <button onClick={handleModal} className="btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default Modal;
