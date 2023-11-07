import { Outlet } from 'react-router-dom';
import { StyledDashboard } from '../../components/Admin_dashboard/Dashboard_styles';
import AdminBar from '../../components/Admin_dashboard/Partials/AdminBar';

import AdminSidebar from '../../components/Admin_dashboard/Partials/Sidebars/AdminSidebar';

const Student = () => {
  return (
    <>
      <StyledDashboard>
        <section className="dashboard">
          <AdminSidebar isAdmin={false} isLecturer={false} />
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

export default Student;
