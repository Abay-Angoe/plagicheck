import React, { useState } from 'react';
import { StyleLoadingState } from './UpLoadingState.Style';
import closeIcon from '../../assets/Plagiarism-close.svg';

interface UploadingStateProps {
  onClose?: () => void;
  title?: string;
  description?: string;
  description1?: string;
  button?: string;
  button1?: string;
}

const UploadingState: React.FC<UploadingStateProps> = ({
  onClose,
  title,
  description,
  description1,
}) => {
  const [isRunning, setIsRunning] = useState(false);

  const startProgress = () => {
    setIsRunning(true);
    // Start your upload process here.
    // Once the upload is complete, call the updateProgress() function with a progress of 100.
  };

  const stopProgress = () => {
    setIsRunning(false);
  };

  return (
    <StyleLoadingState>
      <div className="container">
        <div className="loading-modal">
          <div className="loading">
            <h2>{title}</h2>
            <div className="close">
              <img src={closeIcon} onClick={onClose} alt="Close Icon" />
            </div>
          </div>
          <div className="description">
            <p>{description}</p>
            <p>{description1}</p>
          </div>
          <div className="progress" id="myProgressBar">
            {/* <div className="progress-fill">{filled}</div> */}
            <div className="progress-fill">{isRunning}</div>
            <div
              className="progress-text"
              data-stages="0:Initial Setup,20:Loading Assets,100:Done!"
            ></div>
          </div>
          <div className="loading-buttons">
            {isRunning ? (
              <button className="btn btn-primary" onClick={stopProgress}>
                Stop
              </button>
            ) : (
              <button className="btn btn-primary" onClick={startProgress}>
                Start
              </button>
            )}
            <button className="btn btn-secondary" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </StyleLoadingState>
  );
};

export default UploadingState;

// import React, { useState } from 'react';
// import { StyleLoadingState } from "./UpLoadingState.Style";
// import closeIcon from '../../assets/Plagiarism-close.svg';

// interface UploadingStateProps {
//   onClose?: () => void;
//   title?: string;
//   description?: string;
//   description1?: string;
//   button?: string;
//   button1?: string;
// }

// const UploadingState: React.FC<UploadingStateProps> = ({ onClose, title, description,description1}) => {
//   // const [filled, setFilled] = useState();
//   // const [isRunning, setIsRunning] = useState(false)

//   return (
//     <StyleLoadingState>
//         <div className="container">
//         <div className="loading-modal">
//           <div className="loading">
//             <h2>{title}</h2>
//             <div className="close">
//               <img src={closeIcon} onClick={onClose} alt="Close Icon" />
//             </div>
//           </div>
//           <div className="description">
//           <p>{description}</p>
//           <p>{description1}</p>
//           </div>
//           <div className="progress" id="myProgressBar">
//           {/* <div className="progress-fill">{filled}</div> */}
//           <div className="progress-fill"></div>
//           <div className="progress-text" data-stages="0:Initial Setup,20:Loading Assets,100:Done!"></div>
//         </div>
//           <div className="loading-buttons">

//             <button className="btn btn-secondary" onClick={onClose}>
//               No
//             </button>
//           </div>
//         </div>
//       </div>

//     </StyleLoadingState>
//   );
// };

// export default UploadingState;
