import { useState } from "react";
import { useCountries } from "../hooks/useCountries";

import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const Main = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("none");
  const [countries, , isLoading, error] = useCountries();

  let filteredCountries = [];

  if (query.length > 0) {
    filteredCountries = countries.filter((country) =>
      country.name?.common.toLowerCase().includes(query.toLowerCase())
    );
  } else if (filter !== "none") {
    filteredCountries = countries.filter(
      (country) => country.region === filter
    );
  } else filteredCountries = countries;

  return (
    <>
      <FilterBar
        query={query}
        setQuery={setQuery}
        filter={filter}
        setFilter={setFilter}
      />
      {!isLoading && (
        <CountryList countries={filteredCountries} query={query} />
      )}
      {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default Main;
