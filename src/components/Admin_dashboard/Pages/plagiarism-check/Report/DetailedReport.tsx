import { useRef } from 'react';
import usePlagiarismHistory from '../../../../../services/Api Hooks/useFetchReport';
import { StyledContainer } from '../../ManageUsers/tables/Table_styles';
import PlagiarismPages from '../partials/PlagiarismPagesNav';
import { StyledPlagiarismCheck } from '../plagiarismChecker.Styles';

const DetailedReport = () => {
  const { plagiarismHistory } = usePlagiarismHistory();
  const tableRef = useRef<HTMLTableElement | null>(null);

  return (
    <>
      <StyledPlagiarismCheck>
        <div className="detailed-report">
          <PlagiarismPages tableRef={tableRef} showButtons={true} />
          <div className="main">
            <StyledContainer>
              <div className="table-wrapper report-table detailed">
                <table className="table" ref={tableRef}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Checked on</th>
                      <th>Department</th>
                      <th>Sources</th>
                      <th>Similarity%</th>
                      <th>Originality%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plagiarismHistory?.map((row, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="name">{row.documentTitle}</td>

                          <td>{row.createdAt}</td>
                          <td>{row.departmentId}</td>
                          <td>
                            {row.detail.map((detail, detailIdx) => (
                              <a key={detailIdx} href={detail.documentUrl}>
                                {detail.title}
                              </a>
                            ))}
                          </td>

                          <td>{row.similarity}%</td>
                          <td>{row.originality}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </StyledContainer>
          </div>
        </div>
      </StyledPlagiarismCheck>
    </>
  );
};

export default DetailedReport;
