import { StyledSettings } from './Settings_styles';
import Buttons from '../../../Partials/NavigationButtons/Buttons';
import { useState } from 'react';
import {
  lockIcon,
  lockIconBlue,
  placeholderImage,
  placeholderImageBlue,
} from '../../../../../assets';

const SettingsNav = () => {
  const [currentlyClicked, setCurrentlyClicked] = useState<string | null>(null);
  return (
    <>
      <StyledSettings>
        <section className="settings-nav">
          <div className="container">
            <Buttons
              title="Profile"
              url="profile"
              imgSrc={placeholderImage}
              hoverImgSrc={placeholderImageBlue}
              clickImgSrc={placeholderImageBlue}
              currentlyClicked={currentlyClicked}
              setCurrentlyClicked={setCurrentlyClicked}
            />
            <Buttons
              title="Password"
              url="password"
              imgSrc={lockIcon}
              hoverImgSrc={lockIconBlue}
              clickImgSrc={lockIconBlue}
              currentlyClicked={currentlyClicked}
              setCurrentlyClicked={setCurrentlyClicked}
            />
          </div>
        </section>
      </StyledSettings>
    </>
  );
};

export default SettingsNav;
