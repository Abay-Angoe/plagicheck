import React from 'react';
import { StyledPlagiarismCheck } from '../plagiarismChecker.Styles';
import { StyledContainer } from '../../ManageUsers/tables/Table_styles';
import { Result } from '../../../../../services/Api Hooks/useFileUpload';
import SecondaryButton from '../partials/ButtonTemplate';
import { useNavigate } from 'react-router-dom';

interface PlagiarismResultsProps {
  results: Result[];
  showcolumns: boolean;
}
const PlagiarismResults: React.FC<PlagiarismResultsProps> = ({
  results,
  showcolumns,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('report');
  };
  return (
    <StyledPlagiarismCheck>
      <div className="report-bar">
        {!showcolumns && (
          <>
            <h2>
              Plagiarism Report{' '}
              {/* <img src={closeIcon} onClick={closeResults} alt="" /> */}
            </h2>
          </>
        )}
        <StyledContainer>
          <div className="table-wrapper report-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  {showcolumns && (
                    <>
                      <th>Checked on</th>
                      <th>Department</th>
                      <th>Sources</th>
                    </>
                  )}
                  <th>Similarity%</th>
                  <th>Originality%</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="name">{row.documentTitle}</td>
                      {showcolumns && (
                        <>
                          <td>{row.createdAt}</td>
                          <td>{row.departmentId}</td>
                          {/* <td>{row.detail?.title}</td> */}
                        </>
                      )}
                      <td>{row.similarity}%</td>
                      <td>{row.originality}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="detailed">
              <SecondaryButton
                title="Detailed Report"
                imgSrc=""
                handleClick={handleNavigate}
              />
            </div>
          </div>
        </StyledContainer>
      </div>
    </StyledPlagiarismCheck>
  );
};

export default PlagiarismResults;
