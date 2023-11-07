import React from 'react';
import { closeIcon } from '../../assets';
import { StyledModal } from './Modal_styles';
import useDelete from '../../services/Api Hooks/useDelete';
import { toast } from 'react-toastify';
interface ModalProps {
  title: string;
  content: string;
  endpoint: string;
  closeModal: () => void;
  id: number | string;
}

const DeleteModal: React.FC<ModalProps> = ({
  title,
  content,
  endpoint,
  closeModal,
  id,
}) => {
  const { deleteItem } = useDelete(`${endpoint}/${id}`);

  const handleDelete = async () => {
    try {
      await deleteItem(id);
      closeModal();
      toast('Deleted successfully', {
        type: 'success',
      });
    } catch (err) {
      toast('Could not delete please try again', {
        type: 'error',
      });
    }
  };

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
              <button onClick={handleDelete} className="btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default DeleteModal;
