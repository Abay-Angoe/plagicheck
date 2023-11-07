import { useState } from 'react';
import DepartmentSelect from '../../../add-users/partials/DepartmentSelect';
import CheckboxDropdown from '../../Partials/CustomDropdown/CheckboxDropdown';
import PlagiarismPagesNav from './partials/PlagiarismPagesNav';
import { StyledPlagiarismSettings } from './plagiarismsetting_styles';
import PrimaryButton from './partials/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const PlagiarismSettings = () => {
  const [department, setDepartment] = useState<number>(1);
  const [threshold, setThreshold] = useState<string>('0');

  localStorage.setItem('department', department.toString());
  localStorage.setItem('threshold', threshold);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('../checker');
  };
  return (
    <>
      <StyledPlagiarismSettings>
        <div className="checker-settings">
          <PlagiarismPagesNav showButtons={false} />
          <div className="row">
            <div className="left">
              <h2>Database Selection</h2>
              <p>Choose which databases to compare the content against</p>
            </div>
            <div className="right">
              <CheckboxDropdown endpoint="/faculty" />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <h2>Department Selection</h2>
              <p>Choose which department you are checking for</p>
            </div>
            <div className="right">
              <DepartmentSelect
                onDepartmentSelect={setDepartment}
                endpoint="/department"
              />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <h2>Similarity Threshold</h2>
              <p>Set a minimum required similarity</p>
            </div>
            <div className="right">
              <input
                type="number"
                placeholder="eg. 15%"
                value={threshold}
                id="threshold"
                onChange={(e) => setThreshold(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <h2>Exclusion Settings</h2>
              <p>Exclude sections like citations or references</p>
            </div>
            <div className="right">
              <DepartmentSelect onDepartmentSelect={() => {}} endpoint="" />
            </div>
          </div>
          <PrimaryButton title="Done" handleClick={handleNavigate} imgSrc="" />
        </div>
      </StyledPlagiarismSettings>
    </>
  );
};

export default PlagiarismSettings;
