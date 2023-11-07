import { useState, useEffect } from 'react';
import { StyledSettings } from './Settings_styles';
import ProfileCard from '../partials/ProfileCard';
import Input from '../partials/input';
import { editIcon, placeholderImage } from '../../../../../assets';
import {
  useUserProfile,
  UserProfile,
} from '../../../../../services/Api Hooks/useGetProfile';
import Modal from '../../../../modals/Modal';
import useUploadPicture from '../../../../../services/Api Hooks/useUpdateProfile';

const MyProfile = () => {
  const { profile } = useUserProfile();
  const [formData, setFormData] = useState<UserProfile | null>(null);
  const [file, setFileUrl] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { uploadFile } = useUploadPicture();

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const splitName = (name: string) => {
    const names = name.split(' ');
    return {
      firstName: names[0] || '',
      lastName: names.slice(1).join(' ') || '',
    };
  };

  const { firstName, lastName } = splitName(formData?.name || '');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      setFileUrl(uploadedFile);
      setModalOpen(true);
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      const success = await uploadFile(file);
      if (success) {
        setModalOpen(false);
      } else {
        setModalOpen(false);
      }
    }
  };

  return (
    <>
      <StyledSettings>
        <section className="profile">
          <div className="title">
            <h1>Personal Information</h1>
          </div>
          <div className="card">
            {profile && (
              <ProfileCard
                name={profile.name}
                idType="Staff ID"
                staffId={profile.staffId}
                studentId={profile.studentId}
                profilePicture={profile.profilePicture || placeholderImage}
                handlePicture={() => {}}
              />
            )}

            <div className="upload">
              <input
                type="file"
                title="bulk-upload"
                accept=".jpg,.png,.jpeg,"
                id="database-upload"
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleUpload(e);
                }}
              />
              <img
                src={editIcon}
                alt=""
                onClick={() => {
                  document.getElementById('database-upload')?.click();
                }}
              />
            </div>
          </div>
          <form action="">
            <div className="left">
              <Input
                title="First Name"
                placeholder={firstName || 'Enter name here'}
                value={firstName}
                label="First Name"
                onChange={() => {}}
              />
              <Input
                title="email"
                placeholder={formData?.email || 'Eg. estherhoward@gmail.com'}
                label="Email Address"
                value={formData?.email || 'Eg. estherhoward@gmail.com'}
                onChange={() => {}}
              />
            </div>

            <div className="right">
              <Input
                title="Last name"
                placeholder={lastName || 'Enter staff ID here'}
                label="Last Name"
                onChange={() => {}}
                value={lastName || 'Enter staff ID here'}
              />
              <Input
                title="phoneNumber"
                placeholder={formData?.phoneNumber || '(603) 555-0123'}
                label="Phone"
                onChange={() => {}}
                value={formData?.phoneNumber || '(603) 555-0123'}
              />
            </div>
          </form>
          {modalOpen && (
            <Modal
              closeModal={() => {
                setModalOpen(false);
              }}
              handleModal={handleFileUpload}
              title="Update Profile Picture"
              content="Your files are ready to be uploaded. Do you want to continue with the upload?"
            />
          )}
        </section>
      </StyledSettings>
    </>
  );
};

export default MyProfile;
