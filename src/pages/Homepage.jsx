import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

// import styles from "./Homepage.module.scss";

const Homepage = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`theme-${theme}`}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
