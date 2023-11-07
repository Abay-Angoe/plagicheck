import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { UserTypes } from '../../context/UserTypes';

type RequireAuthProps = {
  allowedRoles: ('ADMIN' | 'LECTURER' | 'STUDENT')[];
};

const RequiredAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }
  const user: UserTypes =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user') || '');

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  } else if (user && !user.isPasswordChanged) {
    if (!location.pathname.includes('settings/password')) {
      const roles: Record<UserTypes['role'], string> = {
        ADMIN: 'admin',
        LECTURER: 'lecturer',
        STUDENT: 'student',
      };

      return <Navigate to={`/${roles[user.role]}/settings/password`} replace />;
    }
  }

  return <Outlet />;
};
export default RequiredAuth;
