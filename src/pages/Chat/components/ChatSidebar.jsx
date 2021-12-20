import React from "react";
import { CancelIcon } from "assets/svgs";

const ChatSidebar = ({ active, closeSidebar, heading, children }) => {
  return (
    <aside className={`chat-sidebar ${active ? "chat-sidebar--active" : ""}`}>
      <header className="header chat-sidebar__header">
        <button onClick={closeSidebar}>
          <CancelIcon className="chat-sidebar__header-icon" />
        </button>
        <h2 className="chat-sidebar__heading"> {heading}</h2>
      </header>
      <div className="chat-sidebar__content">{children}</div>
    </aside>
  );
};

export default ChatSidebar;
