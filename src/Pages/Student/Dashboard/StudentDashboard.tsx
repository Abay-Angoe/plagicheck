import {
  failedChecks,
  noDataIcon,
  passedChecks,
  totalChecks,
} from '../../../assets';
import DashboardCard from '../../../components/Admin_dashboard/Pages/Dashboard/partials/DashboardCard';
import DashboardTable from '../../../components/Admin_dashboard/Pages/Dashboard/tables/DashboardTables';
import usePlagiarismHistory from '../../../services/Api Hooks/useFetchCheckerData';

import useFetchUserChecks from '../../../services/Api Hooks/useFetchUserChecks';
import { StyledLecturerDashboard } from '../../Lecturer/Dashboard/LecturerDashboard_Styles';

const StudentDashboard = () => {
  const { data } = usePlagiarismHistory('/plagiarism/history');
  const lecturerHeaders = [
    'Document',
    'Date/Time',
    'Department',

    'Originality (%)',
  ];

  const { count } = useFetchUserChecks();
  return (
    <>
      <StyledLecturerDashboard>
        <div className="main">
          <div className="top">
            <DashboardCard
              title="Total checks"
              icon={totalChecks}
              data={count?.total}
            />
            <DashboardCard
              title="Passed checks"
              icon={passedChecks}
              data={count?.passed}
            />
            <DashboardCard
              title="Failed checks"
              icon={failedChecks}
              data={count?.failed}
            />
          </div>

          <div className="bottom">
            {data && data.length > 0 ? (
              <DashboardTable
                tableName="Recent checks"
                data={data}
                url="history"
                headers={lecturerHeaders}
                showAll={false}
              />
            ) : (
              <div className="nodata">
                <img src={noDataIcon} alt="" />
                No data to display.
              </div>
            )}
          </div>
        </div>
      </StyledLecturerDashboard>
    </>
  );
};

export default StudentDashboard;
