import { useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

export const useCountry = (countryName = undefined) => {
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/name/${countryName}`)
      .then((resp) => resp.json())
      .then((data) => {
        // set current country
        setCountry(data[0]);

        // return all border countries of current country
        return Promise.all(
          data[0]?.borders.map((border) =>
            fetch(`${BASE_URL}/alpha/${border}`).then((resp) => resp.json())
          )
        );
      })
      .then((borders) => setBorderCountries(borders))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [countryName]);

  return [borderCountries, country, isLoading, error];
};
