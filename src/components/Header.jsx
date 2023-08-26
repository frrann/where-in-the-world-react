/* eslint-disable react/prop-types */

import DarkMode from "./DarkMode";

const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <div className="logo">
        <p>Where in the world?</p>
      </div>
      <DarkMode theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
