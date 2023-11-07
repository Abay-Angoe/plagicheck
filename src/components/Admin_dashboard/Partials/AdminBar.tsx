import ProfileCard from '../Pages/Account settings/partials/ProfileCard';
import { useUserProfile } from '../../../services/Api Hooks/useGetProfile';
import { loadingIcon } from '../../../assets';

const AdminBar = () => {
  const { profile, error } = useUserProfile();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="bars">
        <div className="top">
          <input
            type="text"
            title="search"
            id="search"
            placeholder="Search anything here"
          />

          <div>
            <div className="notif"></div>
            <div className="profile-card">
              {profile ? (
                <ProfileCard
                  name={profile.name}
                  profilePicture={profile.profilePicture}
                  email={profile.email}
                  handlePicture={() => {}}
                />
              ) : (
                <div className="loader">
                  <img src={loadingIcon} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBar;
