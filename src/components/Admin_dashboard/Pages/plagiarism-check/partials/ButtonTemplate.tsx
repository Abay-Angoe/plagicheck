import React from 'react';

interface ButtonProps {
  imgSrc?: string;
  title: string;
  handleClick?: () => void;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  imgSrc,
  title,
  handleClick,
}) => {
  return (
    <>
      <div className="button-box">
        <button className="btn-secondary side-btn" onClick={handleClick}>
          {imgSrc ? <img src={imgSrc} alt="" /> : null}
          {title}
        </button>
      </div>
    </>
  );
};

export default SecondaryButton;
