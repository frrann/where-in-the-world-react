import data from "../data/data.json";
import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";

const randomCountries = data
  .slice()
  .sort(() => Math.random() - 0.5)
  .slice(0, 72);

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(randomCountries);
  }, []);

  return (
    <>
      <FilterBar />
      <CountryList countries={countries} />
    </>
  );
};

export default Main;
