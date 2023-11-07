import { useNavigate } from 'react-router-dom';
import { Styledcontainer } from './Buttons_styles';
import React, { useEffect, useState } from 'react';

interface ButtonProps {
  imgSrc: string;
  title: string;
  url: string;
  hoverImgSrc: string;
  clickImgSrc: string;
  currentlyClicked: string | null;
  setCurrentlyClicked: (title: string | null) => void;
}

const Buttons: React.FC<ButtonProps> = ({
  imgSrc,
  title,
  url,
  hoverImgSrc,
  clickImgSrc,
  currentlyClicked,
  setCurrentlyClicked,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(imgSrc);

  useEffect(() => {
    if (title === currentlyClicked) {
      setImageSrc(clickImgSrc);
    } else if (isHovered) {
      setImageSrc(hoverImgSrc);
    } else {
      setImageSrc(imgSrc);
    }
  }, [imgSrc, hoverImgSrc, clickImgSrc, currentlyClicked, isHovered, title]);

  const handleNavigate = () => {
    navigate(url);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    setCurrentlyClicked(title === currentlyClicked ? null : title);
    handleNavigate();
  };

  const isButtonClicked = title === currentlyClicked;

  return (
    <>
      <Styledcontainer>
        <div className="button-box">
          <button
            className={`btn-primary side-btn ${
              isButtonClicked ? 'clicked' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleButtonClick}
          >
            <img src={imageSrc} alt="" /> {title}
          </button>
        </div>
      </Styledcontainer>
    </>
  );
};

export default Buttons;
