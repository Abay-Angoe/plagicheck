import React, { useState } from 'react';
import { StyledBulkUpload } from './bulkbtn_styles';
import '../../index.css';
import Modal from '../modals/Modal';
import { useBulkUpload } from '../../services/Api Hooks/useBulkUpload';
import { toast } from 'react-toastify';

interface BulkUploadProps {
  endpoint: string;
}

const BulkBtn: React.FC<BulkUploadProps> = ({ endpoint }) => {
  const [file, setFileUrl] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { uploadFile } = useBulkUpload(endpoint);

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      setFileUrl(uploadedFile);
      setModalOpen(true);
    }
  };

  const handleUploadConfirm = async () => {
    if (file) {
      const result = await uploadFile(file);

      if (result.success) {
        toast('Upload  successful', {
          type: 'success',
        });
      } else {
        toast('Error Uploading. Please try again', {
          type: 'error',
        });
      }

      setModalOpen(false);
    }
  };

  return (
    <>
      <StyledBulkUpload>
        <div>
          <input
            type="file"
            title="bulk-upload"
            accept=".csv"
            id="bulk-upload"
            style={{ display: 'none' }}
            onChange={(e) => {
              handleBulkUpload(e);
              //handleSubmit();
            }}
          />
          <button
            type="button"
            id="upload-btn"
            className="btn-primary"
            onClick={() => {
              document.getElementById('bulk-upload')?.click();
            }}
          >
            Browse
          </button>
        </div>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
            }}
            handleModal={handleUploadConfirm}
            title="Bulk Upload"
            content="Your files are ready to be uploaded. Do you want to continue with the bulk upload?"
          />
        )}
      </StyledBulkUpload>
    </>
  );
};

export default BulkBtn;
