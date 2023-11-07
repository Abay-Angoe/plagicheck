import Buttons from '../NavigationButtons/Buttons';

import {
  logo,
  dashboardIcon,
  dashboardIconWhite,
  checkIcon,
  checkWhite,
  scheduleIcon,
  scheduleWhite,
  unitIcon,
  unitWhite,
  databaseIcon,
  databaseWhite,
  manageUsersIcon,
  manageUsersWhite,
  historyIcon,
  historyWhite,
  settingIcon,
  settingWhite,
  settingBlue,
  checkBlue,
  historyBlue,
  manageUsersBlue,
  databaseBlue,
  unitBlue,
  scheduleBlue,
  dashboardIconBlue,
  searchIcon,
  searchWhite,
  searchBlue,
} from '../../../../assets';
import LogoutButton from '../../../logout-button/LogoutButton';
import { useEffect, useState } from 'react';
interface AdminSidebarProps {
  isAdmin: boolean;
  isLecturer: boolean;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isAdmin, isLecturer }) => {
  const [currentlyClicked, setCurrentlyClicked] = useState<string | null>(null);

  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    if (currentlyClicked === 'Plagiarism Checker') {
      setShowSubMenu(true);
    } else if (currentlyClicked === 'Checker') {
      setShowSubMenu(true);
    } else if (currentlyClicked === 'History') {
      setShowSubMenu(true);
    } else if (currentlyClicked === 'Schedule') {
      setShowSubMenu(true);
    } else {
      setShowSubMenu(false);
    }
  }, [currentlyClicked]);
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-btns">
          <Buttons
            imgSrc={dashboardIcon}
            clickImgSrc={dashboardIconWhite}
            hoverImgSrc={dashboardIconBlue}
            url=""
            title="Dashboard"
            currentlyClicked={currentlyClicked}
            setCurrentlyClicked={setCurrentlyClicked}
          />
          <Buttons
            imgSrc={checkIcon}
            clickImgSrc={checkWhite}
            hoverImgSrc={checkBlue}
            url="checker"
            title="Plagiarism Checker"
            currentlyClicked={currentlyClicked}
            setCurrentlyClicked={setCurrentlyClicked}
          />
          {showSubMenu && (
            <div className="submenu">
              <Buttons
                imgSrc={searchIcon}
                clickImgSrc={searchWhite}
                hoverImgSrc={searchBlue}
                url="checker"
                title="Checker"
                currentlyClicked={currentlyClicked}
                setCurrentlyClicked={setCurrentlyClicked}
              />
              <Buttons
                imgSrc={historyIcon}
                clickImgSrc={historyWhite}
                hoverImgSrc={historyBlue}
                url="history"
                title="History"
                currentlyClicked={currentlyClicked}
                setCurrentlyClicked={setCurrentlyClicked}
              />
              {isLecturer && (
                <Buttons
                  imgSrc={scheduleIcon}
                  clickImgSrc={scheduleWhite}
                  hoverImgSrc={scheduleBlue}
                  url="schedule"
                  title="Schedule"
                  currentlyClicked={currentlyClicked}
                  setCurrentlyClicked={setCurrentlyClicked}
                />
              )}
            </div>
          )}
          {isAdmin && (
            <Buttons
              imgSrc={unitIcon}
              clickImgSrc={unitWhite}
              hoverImgSrc={unitBlue}
              url="unit"
              title="Academic Divisions"
              currentlyClicked={currentlyClicked}
              setCurrentlyClicked={setCurrentlyClicked}
            />
          )}
          {isLecturer && (
            <>
              <Buttons
                imgSrc={databaseIcon}
                clickImgSrc={databaseWhite}
                hoverImgSrc={databaseBlue}
                url="database"
                title="Archive"
                currentlyClicked={currentlyClicked}
                setCurrentlyClicked={setCurrentlyClicked}
              />
              <Buttons
                imgSrc={manageUsersIcon}
                clickImgSrc={manageUsersWhite}
                hoverImgSrc={manageUsersBlue}
                url="manageuser"
                title="Manage Users"
                currentlyClicked={currentlyClicked}
                setCurrentlyClicked={setCurrentlyClicked}
              />
            </>
          )}

          <Buttons
            imgSrc={settingIcon}
            clickImgSrc={settingWhite}
            hoverImgSrc={settingBlue}
            url="settings"
            title="Account settings"
            currentlyClicked={currentlyClicked}
            setCurrentlyClicked={setCurrentlyClicked}
          />
        </div>
        <div className="logout-div">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
