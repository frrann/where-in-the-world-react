import { useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

export const useCountries = (countryName = undefined) => {
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          countryName ? `${BASE_URL}/name/${countryName}` : `${BASE_URL}/all`
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching data");

        const data = await response.json();

        countryName && setCountry(data[0]);
        !countryName && setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchCountries();
  }, [countryName]);

  return [countries, country, isLoading, error];
};
