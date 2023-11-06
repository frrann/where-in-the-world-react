import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

// import styles from "./Homepage.module.scss";

const Homepage = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light"
  );

  return (
    <div className={`theme-${theme} w-h-100`}>
      <div className="container w-100">
        <Header theme={theme} setTheme={setTheme} />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
