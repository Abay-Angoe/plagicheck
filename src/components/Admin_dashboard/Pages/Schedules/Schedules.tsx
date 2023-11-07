import { StyledHistoryPage } from '../History/HistoryPage_styles';
import { HistoryTable } from '../History/History_Table/History-Table';
import TableNav from '../History/partials/TableNav';

const SchedulesPage = () => {
  return (
    <>
      <StyledHistoryPage>
        <div className="schedule">
          <TableNav
            title="Schedules"
            subTitle="Schedule check queue"
            showButton={false}
          />
          <HistoryTable endpoint="/schedule" id="" showColumns={false} />
        </div>
      </StyledHistoryPage>
    </>
  );
};

export default SchedulesPage;
