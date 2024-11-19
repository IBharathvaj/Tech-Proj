import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [isPrivate, setIsPrivate] = useState(false); // Default is public

  const togglePrivacy = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div className="profile">
      <img src={user.profilePicture} alt={user.name} />
      <h2>{user.name}</h2>
      <button>Edit Profile</button>
      <button onClick={togglePrivacy}>
        {isPrivate ? 'Set as Public' : 'Set as Private'}
      </button>
      <div>
        {isPrivate ? (
          <p>Your profile is private. Other users can't see your details.</p>
        ) : (
          <p>Your profile is public. Other users can view your details.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
