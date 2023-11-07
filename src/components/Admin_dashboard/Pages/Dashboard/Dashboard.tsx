import DashboardCard from './partials/DashboardCard';
import { StyledAdminDasboard } from './Dashboard_styles';
import DashboardTable from './tables/DashboardTables';
import useFetchLecturerData from '../../../../services/Api Hooks/useFetchLecturerData';

import {
  lecturerIcon,
  loadingIcon,
  noDataIcon,
  numStudents,
  numStudentSubmissions,
} from '../../../../assets';
import useFetchDashboardCount from '../../../../services/Api Hooks/useFetchAdminDashboard';

const Dashboard = () => {
  const apiUrl = `/lecturer`;
  const { data: users, loading } = useFetchLecturerData(apiUrl);
  const emptyHeaders = [
    'Name',
    'Staff Id',
    'Email',
    'Phone Number',
    'Department',
    'Qualifications',
  ];
  const { data } = useFetchDashboardCount();
  return (
    <>
      <StyledAdminDasboard>
        <div className="dashboard-main">
          <div className="dashboard-top">
            <div className="columns">
              <DashboardCard
                title="Number of Lecturers"
                icon={lecturerIcon}
                data={data?.totalLecturers}
              />
              <DashboardCard
                title="Number of Students"
                icon={numStudents}
                data={data?.totalStudents}
              />
              <DashboardCard
                title="Student submissions"
                icon={numStudentSubmissions}
                data={data?.studentSubmissions}
              />
            </div>
          </div>

          <div className="table">
            {loading ? (
              <div className="loader">
                <img src={loadingIcon} alt="" />
              </div>
            ) : users.length > 0 ? (
              <DashboardTable
                tableName="Lecturers"
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
      </StyledAdminDasboard>
    </>
  );
};

export default Dashboard;
