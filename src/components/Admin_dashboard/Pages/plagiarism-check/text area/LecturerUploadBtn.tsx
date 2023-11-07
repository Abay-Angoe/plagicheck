import React, { SetStateAction, useRef, useState } from 'react';
import SecondaryButton from '../partials/ButtonTemplate';
import PrimaryButton from '../partials/PrimaryButton';
import { arrowDown, scheduleBlue } from '../../../../../assets';
import { ScheduleModal } from '../../../../modals/ScheduleModal';

interface FileUploadButtonProps {
  onFileChange: (files: FileList | null) => void;
  title?: string;
  content?: string;
  selectedFiles?: SetStateAction<File[]>;
  onLoadingComplete?: () => void;
  handleScan: () => void;
}

const LecturerUploadButton: React.FC<FileUploadButtonProps> = ({
  onFileChange,

  content,
  handleScan,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileChange(e.target.files);
    }
  };

  //   const parsedThreshold = localStorage.getItem('threshold');
  //   const threshold = parsedThreshold !== null ? parseInt(parsedThreshold, 10) : 0;
  //   const parsedFaculty = localStorage.getItem('selectedOptions');
  //   const facultyId = parsedFaculty !== null ? JSON.parse(parsedFaculty) : [];

  //   const handleScanClick = async () => {
  //     try {
  //       if (!title || !content) {
  //         console.error('Title or content is missing.');
  //         return;
  //       }

  //       await sendToBackend({ title, content, threshold, facultyId });
  //       console.log('Recheck initiated successfully.');
  //     } catch (error) {
  //       console.error('Error rechecking:', error);
  //     }
  //   };

  return (
    <div className="button-div">
      <div className="scan-btn">
        <PrimaryButton title="Scan" handleClick={handleScan} imgSrc="" />
        <span
          className="tooltip-trigger"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <PrimaryButton
            title=""
            id="schedule"
            handleClick={() => {
              setScheduleModal(true);
            }}
            imgSrc={arrowDown}
          />
        </span>
        {tooltipVisible && (
          <div className="tooltip">
            <img src={scheduleBlue} alt="" /> Schedule
          </div>
        )}
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
      />
      {scheduleModal && (
        <ScheduleModal
          content={content}
          closeModal={() => setScheduleModal(false)}
        />
      )}
    </div>
  );
};

export default LecturerUploadButton;
