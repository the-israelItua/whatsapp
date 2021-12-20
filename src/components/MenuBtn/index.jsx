import React, { useState } from "react";
import { MenuIcon } from "assets/svgs";
import useOnClickOutside from "hooks/useOnClickOutside";
import "./styles/main.scss";

const MenuBtn = ({
  className,
  iconId,
  iconClassName,
  ariaLabel,
  options = [],
  position = "left",
  showPressed = true,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const clickOutRef = React.useRef();

  useOnClickOutside(clickOutRef, () => setShowOptions(false));

  return (
    <div className="pos-rel" ref={clickOutRef}>
      <button
        aria-label={ariaLabel}
        className={`options-btn ${
          showOptions && showPressed ? "options-btn--pressed" : ""
        } ${className || ""}`}
        onClick={() => setShowOptions(!showOptions)}
        {...props}
      >
        <MenuIcon className={iconClassName} />
      </button>
      <ul
        className={`options-btn__options ${
          showOptions ? "options-btn__options--active" : ""
        } ${position === "right" ? "options-btn__options--right" : ""}`}
      >
        {options.map((option, index) => (
          <li
            className="options-btn__option"
            key={index}
            onClick={() => {
              setShowOptions(false);
              option.onClick();
            }}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBtn;
