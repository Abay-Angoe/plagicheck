import React, { useState } from 'react';
import closeIcon from '../../assets/Plagiarism-close.svg';
import { StyledModal } from './Modal_styles';
import Input from '../Admin_dashboard/Pages/Account settings/partials/input';

import { toast } from 'react-toastify';
import useEditFaculty, {
  FacultyData,
} from '../../services/Api Hooks/useEditFaculty';

export interface ModalProps {
  closeModal: () => void;
  id: number;
}

const EditFaculty: React.FC<ModalProps> = ({ closeModal, id }) => {
  const [inputValue, setInputValue] = useState('');
  const { editFaculty } = useEditFaculty(id);

  const handleAddFaculty = async () => {
    const data: FacultyData = { facultyName: inputValue };
    try {
      await editFaculty(data);
      closeModal();
      toast('Added successful', {
        type: 'success',
      });
    } catch (error) {
      toast('An error occurred while adding the faulty', {
        type: 'error',
      });
    }
  };

  return (
    <>
      <StyledModal>
        <div className="modal input-modal">
          <div className="modal-tile">
            <div className="title">
              <h1>Edit Faculty</h1>

              <img src={closeIcon} alt="" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <Input
                label="Faculty name"
                placeholder="Enter faculty name here"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal} className="btn-secondary">
                Cancel
              </button>
              <button onClick={handleAddFaculty} className="btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default EditFaculty;
