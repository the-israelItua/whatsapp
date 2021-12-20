import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Modal from "components/Modal";
import { useThemeContext } from "store/themeContext";
import "./styles/main.scss";

const ChangeThemeModal = forwardRef((props, ref) => {
  const modal = useRef(null);
  const [selected, setSelected] = useState("system");

  const { updateTheme } = useThemeContext();

  useImperativeHandle(ref, () => ({
    async open() {
      modal.current.open();
    },
    async close() {
      modal.current.close();
    },
  }));

  const handleUpdateTheme = () => {
    updateTheme(selected);
    modal.current.close();
  };

  return (
    <Modal ref={modal}>
      <div className="change-theme">
        <h3>Choose theme</h3>
        <ul className="change-theme__list">
          <li>
            <input
              type="radio"
              id="light"
              name="theme"
              defaultChecked={selected === "light"}
              onChange={() => setSelected("light")}
            />
            <p>Light</p>
          </li>
          <li>
            <input
              type="radio"
              id="dark"
              name="theme"
              defaultChecked={selected === "dark"}
              onChange={() => setSelected("dark")}
            />
            <p>Dark</p>
          </li>
          <li>
            <input
              type="radio"
              id="default"
              name="theme"
              defaultChecked={selected === "system"}
              onChange={() => setSelected("system")}
            />
            <p>System default</p>
          </li>
        </ul>
        <div className="change-theme__btns">
          <button
            className="change-theme__btns__cancel"
            onClick={() => modal.current.close()}
          >
            CANCEL
          </button>
          <button
            className="change-theme__btns__ok"
            onClick={handleUpdateTheme}
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default memo(ChangeThemeModal);
