import { Outlet } from 'react-router-dom';
import SettingsNav from './components/SettingsNav';
import { StyledAccountSettings } from './AccountSettings_styles';

const AccountSettings = () => {
  return (
    <>
      <StyledAccountSettings>
        <div className="main">
          <SettingsNav />
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </StyledAccountSettings>
    </>
  );
};

export default AccountSettings;
