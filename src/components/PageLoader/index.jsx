import React from "react";
import "./styles/main.scss";
import { WhatsappIcon, LockIcon } from "assets/svgs";

const PageLoader = ({ done }) => {
  return (
    <div className="pageLoader">
      <div className="pageLoader__logo-wrapper">
        <WhatsappIcon />
      </div>
      <div
        className={`pageLoader__progress ${
          done ? "pageLoader__progress--done" : ""
        }`}
      ></div>
      <h1 className="pageLoader__title"> Whatsapp</h1>
      <p className="pageLoader__desc">
        <LockIcon className="pageLoader__icon" />
        End-to-end encrypted.
      </p>
    </div>
  );
};

export default PageLoader;
