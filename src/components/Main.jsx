import data from "../data/data.json";
import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import { useState } from "react";

const randomCountries = data
  .slice()
  .sort(() => Math.random() - 0.5)
  .slice(0, 72);

const Main = () => {
  const [query, setQuery] = useState("");

  const searchedCountries =
    query.length > 0
      ? randomCountries.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        )
      : randomCountries;

  return (
    <>
      <FilterBar query={query} setQuery={setQuery} />
      <CountryList countries={searchedCountries} />
    </>
  );
};

export default Main;
