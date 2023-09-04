/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
// import styles from "./Header.module.scss";

const Header = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <p>Where in the world?</p>
      </div>
      <DarkMode theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
