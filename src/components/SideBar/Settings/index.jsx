import React, { useRef } from "react";
import Drawer from "components/Drawer";
import avatar from "assets/images/women.jpeg";
import {
  ArchivedIcon,
  BlockIcon,
  HelpIcon,
  NotificationSettingsIcon,
  ShortcutsIcon,
  ThemeIcon,
  WallpaperIcon,
} from "assets/svgs";
import ChageThemeModal from "./modals/ChageTheme";
import "./styles/main.scss";

const Settings = ({ drawerActive, setDrawerActive }) => {
  const themeModal = useRef(null);

  const openThemeModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    themeModal.current.open();
  };

  return (
    <Drawer
      title="Settings"
      setDrawerActive={setDrawerActive}
      drawerActive={drawerActive}
    >
      <div className="settings">
        <div className="settings__header">
          <img src={avatar} alt="" />
          <div className="settings__header__status">
            <h5>the-israelItua</h5>
            <p>Vox populi, Vox dei</p>
          </div>
        </div>

        <ul>
          <li>
            <NotificationSettingsIcon />
            <p className="no-border">Notifications</p>
          </li>
          <li onClick={openThemeModal}>
            <ThemeIcon />
            <p>Theme</p>
          </li>
          <li>
            <WallpaperIcon />
            <p>Chat wallpaper</p>
          </li>
          <li>
            <ArchivedIcon />
            <p>Archived chats</p>
          </li>
          <li>
            <BlockIcon />
            <p>Blocked</p>
          </li>
          <li>
            <ShortcutsIcon />
            <p>Keyboard shortcuts</p>
          </li>
          <li>
            <HelpIcon />
            <p>Help</p>
          </li>
        </ul>
      </div>

      <ChageThemeModal ref={themeModal} />
    </Drawer>
  );
};

export default Settings;
