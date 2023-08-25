import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { RiMoonFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import "./styles/globals.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`theme-${theme}`}>
      <div className="container">
        <header>
          <div className="logo">
            <p>Where in the world?</p>
          </div>
          <div
            className="theme-switch"
            onClick={() =>
              setTheme((crtState) => (crtState === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? <RiMoonFill /> : <RiMoonLine />}
            <p>Dark Mode</p>
          </div>
        </header>
        <main className="main">
          <div className="filters">
            <div className="search">
              <IoMdSearch />
              <input
                id="search"
                type="text"
                placeholder="Search for a country..."
              />
            </div>
            <div className="filter">
              <select id="filter">
                <option value="none">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
          <div className="countries">
            <div className="country card">
              <img className="country__flag" src="" alt="$Country flag" />
              <p className="country__name">$Name</p>
              <ul className="country__details">
                <li className="country__population">$Population</li>
                <li className="country__region">$Region</li>
                <li className="country__capital">$Capital</li>
              </ul>
            </div>
            <div className="country card">
              <img className="country__flag" src="" alt="$Country flag" />
              <p className="country__name">$Name</p>
              <ul className="country__details">
                <li className="country__population">$Population</li>
                <li className="country__region">$Region</li>
                <li className="country__capital">$Capital</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
