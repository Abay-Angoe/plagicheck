import { useState } from 'react';
import DepartmentSelect from '../../../add-users/partials/DepartmentSelect';
import { StyledTableNav } from '../History/partials/TableNav_Styles';
import PrimaryButton from '../plagiarism-check/partials/PrimaryButton';
import Modal from '../../../modals/Modal';
import useUploadDocument from '../../../../services/Api Hooks/useAddDatabase';
import { toast } from 'react-toastify';

const DatabaseBar = () => {
  const [facultyId, setFacultyId] = useState<number>(0);
  const [file, setFileUrl] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { uploadDocument } = useUploadDocument();

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      setFileUrl(uploadedFile);
      setModalOpen(true);
    }
  };

  const handleUploadDocument = async () => {
    try {
      if (file) {
        await uploadDocument(facultyId, { file });
        toast('Upload  successful', {
          type: 'success',
        });
        setModalOpen(false);
      } else {
        toast('No file selected for upload.', {
          type: 'error',
        });
        setModalOpen(false);
      }
    } catch (err) {
      toast('Error Uploading. Please try again', {
        type: 'error',
      });
      setModalOpen(false);
    }
  };
  console.log(facultyId);

  return (
    <>
      <StyledTableNav>
        <div className="bars">
          <div className="bar">
            <div className="left">
              <h1>Database</h1>
              <span>Upload past project works here.</span>
            </div>
            <div className="right">
              <DepartmentSelect
                endpoint="/faculty"
                onDepartmentSelect={setFacultyId}
              />
              {/* <Filter /> */}
              <div className="buttons">
                <input
                  type="file"
                  title="bulk-upload"
                  accept=".pdf,.txt,.doc,.docx"
                  id="database-upload"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    handleBulkUpload(e);
                  }}
                />
                <PrimaryButton
                  title={`Add Documents`}
                  imgSrc=""
                  handleClick={() => {
                    document.getElementById('database-upload')?.click();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
            }}
            handleModal={handleUploadDocument}
            title="Add File to Database"
            content="Your files are ready to be uploaded. Do you want to continue with the upload?"
          />
        )}
      </StyledTableNav>
    </>
  );
};

export default DatabaseBar;
