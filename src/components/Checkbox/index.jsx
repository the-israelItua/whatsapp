import { CheckIcon } from "assets/svgs";
import React from "react";
import "./styles.scss";

const Checkbox = ({ inputProps }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        {...inputProps}
        className="checkbox__input"
      />
      <label htmlFor="checkbox" className="checkbox__label">
        <CheckIcon className="checkbox__icon" />
      </label>
    </div>
  );
};

export default Checkbox;
