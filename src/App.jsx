import { useState } from "react";

import data from "./data/data.json";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CountryList from "./components/CountryList";

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
        <Header theme={theme} setTheme={setTheme} />
        <main className="main">
          <FilterBar />
          <CountryList countries={randomCountries} />
        </main>
      </div>
    </div>
  );
}

export default App;
