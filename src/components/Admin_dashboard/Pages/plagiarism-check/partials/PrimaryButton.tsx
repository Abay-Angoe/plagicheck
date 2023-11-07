import React from 'react';

interface ButtonProps {
  imgSrc?: string;
  toolTip?: string;
  title: string;
  handleClick: () => void;
  id?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  imgSrc,
  toolTip,
  id,
  title,
  handleClick,
}) => {
  return (
    <>
      <div className="button-box">
        <button
          title={toolTip}
          id={id}
          className="btn-primary side-btn"
          onClick={handleClick}
        >
          <img src={imgSrc} alt="" /> {title}
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
