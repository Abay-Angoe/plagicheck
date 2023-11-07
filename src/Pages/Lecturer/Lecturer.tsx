import { Outlet } from 'react-router-dom';
import AdminBar from '../../components/Admin_dashboard/Partials/AdminBar';

import { StyledDashboard } from '../../components/Admin_dashboard/Dashboard_styles';
import AdminSidebar from '../../components/Admin_dashboard/Partials/Sidebars/AdminSidebar';

const Lecturer = () => {
  return (
    <>
      <StyledDashboard>
        <section className="dashboard">
          <AdminSidebar isAdmin={false} isLecturer={true} />
          <div className="main">
            <AdminBar />
            <div>
              <Outlet />
            </div>
          </div>
        </section>
      </StyledDashboard>
    </>
  );
};

export default Lecturer;
