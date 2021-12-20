import React, { useState } from "react";
import Drawer from "components/Drawer";
import avatar from "assets/images/women.jpeg";
import ProfileDetail from "components/ProfileDetail";
import { ProfileCameraIcon } from "assets/svgs";
import "./styles/main.scss";

const Profile = ({ drawerActive, setDrawerActive }) => {
  const [name, setName] = useState("the-IsraelItua");
  const [about, setAbout] = useState("Vox populi, Vox dei");

  return (
    <Drawer
      title="Profile"
      setDrawerActive={setDrawerActive}
      drawerActive={drawerActive}
    >
      <div className="profile">
        <div className="profile__image">
          <img src={avatar} alt="profile image" />
          <div className="profile__image__overlay">
            <ProfileCameraIcon />
            <p>Change Profile Photo</p>
          </div>
        </div>
        <div className="profile__details">
          <ProfileDetail
            header="Your name"
            value={name}
            wordCount
            onChange={setName}
          />
          <p className="profile__subtext">
            This is not your username or pin. This name will be visible to youw
            WhatsApp contacts.
          </p>
          <ProfileDetail header="About" value={about} onChange={setAbout} />
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;
