import React from "react";
import Drawer from "components/Drawer";

const NewChat = ({ drawerActive, setDrawerActive }) => {
  return (
    <Drawer
      title="New Chat"
      setDrawerActive={setDrawerActive}
      drawerActive={drawerActive}
    >
      <p>New Chat</p>
    </Drawer>
  );
};

export default NewChat;
