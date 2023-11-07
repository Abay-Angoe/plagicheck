import { useState } from 'react';
import { tableMore } from '../../../../assets';
import { StyledMoreBtn } from './More_Styles';

interface MoreBtnProps {
  openDelete: () => void;
  edit: boolean;
  openEdit: () => void;
}

const TableMoreBtn: React.FC<MoreBtnProps> = ({
  openDelete,
  openEdit,
  edit,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDeleteClick = () => {
    openDelete();
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
      <StyledMoreBtn>
        <div className="more">
          <button title="more-btn" onClick={toggleDropdown}>
            <img src={tableMore} alt="" />
          </button>
          {dropdownVisible && (
            <div className="dropdown">
              {edit && <button onClick={openEdit}>Edit</button>}
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
      </StyledMoreBtn>
    </>
  );
};

export default TableMoreBtn;
