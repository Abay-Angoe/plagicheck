import { useState } from 'react';
import InputModal from '../../../modals/InputModal';
import { StyledTableNav } from '../History/partials/TableNav_Styles';
import SecondaryButton from '../plagiarism-check/partials/ButtonTemplate';
import DepartmentModal from '../../../modals/addDepartmentModal';

export const AcademicBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false);

  return (
    <>
      <StyledTableNav>
        <div className="bars">
          <div className="bar">
            <div className="left">
              <h1>Academic Unit</h1>
              <span>Add faculties and departments</span>
            </div>
            <div className="right">
              <div className="buttons">
                <SecondaryButton
                  title="Add Department"
                  handleClick={() => {
                    setDepartmentModalOpen(true);
                  }}
                />
                <SecondaryButton
                  title="Add Faculty"
                  handleClick={() => {
                    setModalOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <InputModal
            closeModal={() => {
              setModalOpen(false);
            }}
          />
        )}

        {departmentModalOpen && (
          <DepartmentModal
            closeModal={() => {
              setDepartmentModalOpen(false);
            }}
          />
        )}
      </StyledTableNav>
    </>
  );
};
