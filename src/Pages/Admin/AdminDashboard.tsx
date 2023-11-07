import '../../index.css';
import { StyledDashboard } from '../../components/Admin_dashboard/Dashboard_styles';
import AdminSidebar from '../../components/Admin_dashboard/Partials/Sidebars/AdminSidebar';
import AdminBar from '../../components/Admin_dashboard/Partials/AdminBar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <>
      <StyledDashboard>
        <section className="dashboard">
          <AdminSidebar isAdmin={true} isLecturer={true} />
          <div className="main">
            <AdminBar />

            <Outlet />
          </div>
        </section>
      </StyledDashboard>
    </>
  );
};

export default AdminDashboard;
