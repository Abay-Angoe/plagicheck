import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
import { StyleFileLoadingState } from './FileLoadingState.Styles';
import { closeIcon } from '../../assets';

interface LoadingStateProps {
  selectedFiles: File[];
  onLoadingComplete: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  selectedFiles,
  onLoadingComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [filesProcessed, setFilesProcessed] = useState(0);

  const closeModal = () => {
    onLoadingComplete();
  };

  useEffect(() => {
    let totalSize = 0;

    selectedFiles.forEach((file) => {
      totalSize += file.size;
    });

    let loadedSize = 0;
    let processedFiles = 0;

    selectedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        loadedSize += e.loaded;
        processedFiles++;

        const currentProgress = (loadedSize / totalSize) * 100;
        setProgress(currentProgress);
        setFilesProcessed(processedFiles);

        if (processedFiles === selectedFiles.length) {
          onLoadingComplete();
        }
      };

      reader.readAsDataURL(file);
    });
  }, [selectedFiles, onLoadingComplete]);

  return (
    <StyleFileLoadingState>
      <div className="container">
        <div className="loading-modal">
          <div className="loading">
            <h2>Uploading Document</h2>
            <div className="close">
              <img src={closeIcon} onClick={closeModal} alt="Close Icon" />
            </div>
          </div>
          <div className="description">
            <p>
              {filesProcessed} of {selectedFiles.length} of document uploaded
            </p>
            <p>{progress.toFixed(2)}% complete</p>
          </div>
          <div className="progress" id="myProgressBar">
            <progress className="progress-fill" value={progress} max="100" />
            <div
              className="progress-text"
              data-stages="0:Initial Setup,20:Loading Assets,100:Done!"
            ></div>
          </div>
          <div className="loading-buttons">
            <button className="btn btn-secondary" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </div>
    </StyleFileLoadingState>
  );
};

export default LoadingState;
