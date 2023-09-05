import { useState } from "react";
import { useCountries } from "../hooks/useCountries";

import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const Main = () => {
  const [query, setQuery] = useState("");
  const [countries, , isLoading, error] = useCountries();

  const searchedCountries =
    query.length > 0
      ? countries.filter((country) =>
          country.name?.common.toLowerCase().includes(query.toLowerCase())
        )
      : countries;

  return (
    <>
      <FilterBar query={query} setQuery={setQuery} />
      {!isLoading && <CountryList countries={searchedCountries} />}
      {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default Main;
