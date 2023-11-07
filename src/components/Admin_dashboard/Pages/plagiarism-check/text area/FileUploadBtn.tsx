import React, { SetStateAction, useRef } from 'react';
import SecondaryButton from '../partials/ButtonTemplate';
import PrimaryButton from '../partials/PrimaryButton';

interface FileUploadButtonProps {
  onFileChange: (files: FileList | null) => void;
  title?: string;
  content?: string;
  selectedFiles?: SetStateAction<File[]>;
  onLoadingComplete?: () => void;
  handleScan: () => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  onFileChange,
  handleScan,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const [showModal, setShowModal] = useState(false);

  // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const [loadingComplete, setLoadingComplete] = useState(false);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // const files = Array.from(e.target.files);
      // setShowModal(true);
      // setSelectedFiles(files);
      // setLoadingComplete(false);
      onFileChange(e.target.files);
    }
  };

  // const handleLoadingComplete = () => {
  //   setLoadingComplete(true);
  //   setShowModal(false);
  // };

  // const handleScanClick = async () => {
  //   try {
  //     if (!title || !content) {
  //       console.error('Title or content is missing.');
  //       return;
  //     }

  //     await sendToBackend({ title, content });
  //     console.log('Recheck initiated successfully.');
  //   } catch (error) {
  //     console.error('Error rechecking:', error);
  //   }
  // };

  return (
    <div className="button-div">
      <div className="scan-btn">
        <PrimaryButton title="Scan" handleClick={handleScan} imgSrc="" />
      </div>
      <input
        type="file"
        accept=".pdf,.txt,.doc,.docx"
        id="file-input"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        multiple
      />
      <SecondaryButton
        title="Upload File"
        handleClick={handleUploadClick}
        imgSrc=""
        // onClick={setShowModal}
      />
    </div>
  );
};

export default FileUploadButton;
