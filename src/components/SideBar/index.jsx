import React, { useState } from "react";
import "./styles/main.scss";
import avatar from "assets/images/women.jpeg";
import Alert from "./Alert";
import Contact from "./Contact";
import MenuBtn from "components/MenuBtn";
import Profile from "./Profile";
import NewChat from "./NewChat";
import { StatusIcon, ChatIcon, SearchIcon, BackIcon } from "assets/svgs";
import { useUsersContext } from "store/userContext";
import Settings from "./Settings";

const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const { users: contacts } = useUsersContext();

  return (
    <aside className="sidebar">
      <header className="header">
        <button
          className="sidebar__avatar-wrapper"
          onClick={() => setShowProfile(true)}
        >
          <img src={avatar} alt="Karen Okonkwo" className="avatar" />
        </button>
        <div className="sidebar__actions">
          <button className="sidebar__action" aria-label="Status">
            <StatusIcon className="sidebar__action-icon sidebar__action-icon--status" />
          </button>
          <button
            className="sidebar__action"
            aria-label="New chat"
            onClick={() => setShowNewChat(true)}
          >
            <ChatIcon className="sidebar__action-icon" />
          </button>
          <MenuBtn
            className="sidebar__action"
            ariaLabel="Menu"
            iconId="menu"
            iconClassName="sidebar__action-icon"
            options={[
              {
                text: "New group",
                onClick: () => {},
              },
              {
                text: "Starred Messages",
                onClick: () => {},
              },
              {
                text: "Settings",
                onClick: () => setShowSettings(true),
              },

              {
                text: "Log out",
                onClick: () => {},
              },
            ]}
          />
        </div>
      </header>
      <Alert />
      <div className="search-wrapper">
        <div className="search-icons">
          <SearchIcon />
          <button className="search__back-btn">
            <BackIcon />
          </button>
        </div>
        <input className="search" placeholder="Search or start a new chat" />
      </div>
      <div className="sidebar__contacts">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>

      <Profile drawerActive={showProfile} setDrawerActive={setShowProfile} />
      <NewChat drawerActive={showNewChat} setDrawerActive={setShowNewChat} />
      <Settings drawerActive={showSettings} setDrawerActive={setShowSettings} />
    </aside>
  );
};

export default Sidebar;
