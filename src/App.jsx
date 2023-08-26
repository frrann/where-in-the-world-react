import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { RiMoonFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import data from "./data/data.json";
import "./styles/globals.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const randomCountries = data
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

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
            {randomCountries.map((country) => (
              <div className="country card" key={country.alpha3Code}>
                <img
                  className="country__flag"
                  src={country.flags?.png}
                  alt={`${country.name} flag`}
                />
                <h2 className="country__name">{country.name}</h2>
                <ul className="country__details">
                  <li className="country__population">
                    <span className="country__details__label">
                      Population:{" "}
                    </span>
                    {country.population.toLocaleString("en-US")}
                  </li>
                  <li className="country__region">
                    <span className="country__details__label">Region: </span>
                    {country.region}
                  </li>
                  <li className="country__capital">
                    <span className="country__details__label">Capital: </span>
                    {country.capital}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
