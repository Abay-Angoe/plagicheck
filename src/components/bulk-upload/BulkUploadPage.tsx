import { useNavigate } from 'react-router';
import { arrowLeft } from '../../assets';
import SecondaryButton from '../Admin_dashboard/Pages/plagiarism-check/partials/ButtonTemplate';
import BulkBtn from './BulkBtn';
import { StyledBulkUpload } from './bulkbtn_styles';
import React from 'react';

interface BulkUploadProps {
  title: string;
  endpoint: string;
}

const BulkUploadPage: React.FC<BulkUploadProps> = ({ endpoint, title }) => {
  const handleDownload = () => {
    const fileUrl =
      'https://res.cloudinary.com/die3ykqmp/raw/upload/v1695906090/lecturer_rgqcrf.csv';
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = fileUrl;
    a.download = 'lecturer_rgqcrf.csv';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('../manageuser');
  };
  return (
    <>
      <StyledBulkUpload>
        <div className="bulk-page">
          <div className="bulk-bar">
            <h1>Bulk upload</h1>
            <p>Add {title} in bulk here</p>
          </div>
          <div className="main">
            <div className="back-btn">
              <SecondaryButton
                title="Back"
                imgSrc={arrowLeft}
                handleClick={handleNavigate}
              />
            </div>
            <div className="content">
              <h1>Bulk Upload for {title}</h1>

              <div>
                <h3>Instructions</h3>
                <ul>
                  <li>Download the CSV template</li>
                  <li>
                    Fill in the required information in the following format:
                    Name (First name and last name), Email address, Phone
                    number, Department, Qualification.
                  </li>
                  <li>Upload the completed CSV file</li>
                </ul>
              </div>

              <div>
                <h3>Download CVS Template</h3>
                <p>
                  Download the CSV template to fill in the required information
                  for bulk upload.
                </p>
                <SecondaryButton
                  title="Download Template"
                  handleClick={handleDownload}
                />
              </div>

              <div>
                <h3>Upload CSV File</h3>
                <p>
                  Choose a CSV file from your computer to initiate the bulk
                  upload process.
                </p>
                <BulkBtn endpoint={endpoint} />
              </div>
            </div>
          </div>
        </div>
      </StyledBulkUpload>
    </>
  );
};

export default BulkUploadPage;
