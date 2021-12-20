import React from "react";
import { BackIcon } from "assets/svgs";
import "./styles/main.scss";

const Drawer = ({ drawerActive, children, title, setDrawerActive }) => {
  return (
    <section className={drawerActive ? "show_drawer drawer" : "drawer"}>
      <div className="drawer__header">
        <BackIcon onClick={() => setDrawerActive(false)} />
        <h3>{title}</h3>
      </div>
      <div className="drawer__body">{children}</div>
    </section>
  );
};

export default Drawer;
