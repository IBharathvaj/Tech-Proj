// src/pages/EditProfile.js
import React, { useState } from 'react';

const EditProfile = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleSave = () => {
    onSave({ name, profilePicture });
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="file"
        onChange={(e) => setProfilePicture(e.target.files[0])}
        accept="image/*"
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditProfile;
