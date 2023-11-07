import DashboardCard from '../../../components/Admin_dashboard/Pages/Dashboard/partials/DashboardCard';
import DashboardTable from '../../../components/Admin_dashboard/Pages/Dashboard/tables/DashboardTables';

import { StyledLecturerDashboard } from './LecturerDashboard_Styles';

import {
  totalChecks,
  passedChecks,
  failedChecks,
  noDataIcon,
} from '../../../assets';
import useFetchUserChecks from '../../../services/Api Hooks/useFetchUserChecks';

import useFetchLecturerData from '../../../services/Api Hooks/useFetchLecturerData';

const LecturerDashboard = () => {
  const apiUrl = `/student`;
  const { data: users } = useFetchLecturerData(apiUrl);
  const emptyHeaders = [
    'Name',
    'Student Id',
    'Email',
    'Phone Number',
    'Department',
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
            {users && users.length > 0 ? (
              <DashboardTable
                tableName="students"
                data={users}
                url="manageuser"
                headers={emptyHeaders}
                showAll={true}
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

export default LecturerDashboard;
