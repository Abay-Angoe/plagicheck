import React, { useState } from 'react';
import closeIcon from '../../assets/Plagiarism-close.svg';
import { StyledModal } from './Modal_styles';
import Input from '../Admin_dashboard/Pages/Account settings/partials/input';
import DepartmentSelect from '../add-users/partials/DepartmentSelect';
import useAddDepartment, {
  DepartmentData,
} from '../../services/Api Hooks/useAddDepartment';
import { toast } from 'react-toastify';

export interface ModalProps {
  closeModal: () => void;
}

const DepartmentModal: React.FC<ModalProps> = ({ closeModal }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const { addDepartment } = useAddDepartment();

  const handleAddDepartment = async () => {
    const data: DepartmentData = {
      departmentName: inputValue,
      facultyId: selectedDepartment,
    };

    try {
      await addDepartment(data);
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
              <h1>Add department</h1>

              <img src={closeIcon} alt="" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <Input
                label="Department name"
                placeholder="Enter department name here"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <label htmlFor="">Select faculty</label>
              <DepartmentSelect
                endpoint="/faculty"
                onDepartmentSelect={setSelectedDepartment}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={closeModal} className="btn-secondary">
                Cancel
              </button>
              <button onClick={handleAddDepartment} className="btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};

export default DepartmentModal;
