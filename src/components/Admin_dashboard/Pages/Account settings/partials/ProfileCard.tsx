import React from 'react';
import { StyledSettings } from '../components/Settings_styles';
import { placeholderImage } from '../../../../../assets';

interface ProfileCardProps {
  name: string;
  staffId?: string | undefined;
  studentId?: string | undefined;
  idType?: string;
  profilePicture: string | null;
  handlePicture: () => void;
  email?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  staffId,
  studentId,
  idType,
  profilePicture,
  handlePicture,
  email,
}) => {
  return (
    <>
      <StyledSettings>
        <section className="usercard">
          <div className="image-box">
            <img
              src={profilePicture || placeholderImage}
              alt=""
              onClick={handlePicture}
            />
          </div>
          <div className="user-info">
            <p>{name}</p>
            <span>
              {idType} {staffId || studentId}
              {email}
            </span>
          </div>
        </section>
      </StyledSettings>
    </>
  );
};

export default ProfileCard;
