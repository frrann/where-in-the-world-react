/* eslint-disable react/prop-types */
import { RiMoonFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";

const DarkMode = ({ theme, setTheme }) => {
  return (
    <div
      className="theme-switch"
      onClick={() =>
        setTheme((crtState) => (crtState === "dark" ? "light" : "dark"))
      }
    >
      {theme === "dark" ? <RiMoonFill /> : <RiMoonLine />}
      <p>Dark Mode</p>
    </div>
  );
};

export default DarkMode;
