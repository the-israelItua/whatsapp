import React from "react";

import MenuBtn from "components/MenuBtn";
import { SearchIcon } from "assets/svgs";

const Header = ({ user, openProfileSidebar, openSearchSidebar }) => {
  return (
    <header className="header chat__header">
      <div className="chat__avatar-wrapper" onClick={openProfileSidebar}>
        <img src={user.profile_picture} alt={user?.name} className="avatar" />
      </div>

      <div className="chat__contact-wrapper" onClick={openProfileSidebar}>
        <h2 className="chat__contact-name"> {user?.name}</h2>
        <p className="chat__contact-desc">
          {user.typing ? "typing..." : "online"}
        </p>
      </div>
      <div className="chat__actions">
        <button
          className="chat__action"
          aria-label="Search"
          onClick={openSearchSidebar}
        >
          <SearchIcon className="chat__action-icon chat__action-icon--search" />
        </button>
        <MenuBtn
          className="chat__action"
          ariaLabel="Menu"
          iconId="menu"
          iconClassName="chat__action-icon"
          options={[
            {
              text: "Contact info",
              onClick: () => {},
            },
            {
              text: "Select messages",
              onClick: () => {},
            },
            {
              text: "Mute notifications",
              onClick: () => {},
            },

            {
              text: "Clear messsages",
              onClick: () => {},
            },
            {
              text: "Delete chat",
              onClick: () => {},
            },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
