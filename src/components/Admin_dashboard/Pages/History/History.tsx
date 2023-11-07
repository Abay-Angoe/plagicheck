import { useRef } from 'react';
import { StyledHistoryPage } from './HistoryPage_styles';
import { HistoryTable } from './History_Table/History-Table';
import TableNav from './partials/TableNav';

const HistoryPage = () => {
  const tableRef = useRef<HTMLTableElement | null>(null);
  return (
    <>
      <StyledHistoryPage>
        <div className="history">
          <TableNav
            title="History"
            subTitle="Plagiarism check history"
            showButton={true}
            tableRef={tableRef}
          />
          <div className="table" ref={tableRef}>
            <HistoryTable
              endpoint="/plagiarism/history"
              id=""
              showColumns={true}
            />
          </div>
        </div>
      </StyledHistoryPage>
    </>
  );
};

export default HistoryPage;
