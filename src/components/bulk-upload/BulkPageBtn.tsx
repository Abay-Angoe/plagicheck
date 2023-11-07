import { useNavigate } from 'react-router-dom';
import { StyledBulkUpload } from './bulkbtn_styles';
import uploadIcon from '../../assets/Plagiarism-bulk upload.svg';

const BulkPageBtn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('../bulkupload');
  };
  return (
    <>
      <StyledBulkUpload>
        <button
          type="button"
          id="upload-btn"
          className="btn-secondary"
          onClick={handleNavigate}
        >
          Bulk Upload
          <img src={uploadIcon} alt="" />
        </button>
      </StyledBulkUpload>
    </>
  );
};

export default BulkPageBtn;
