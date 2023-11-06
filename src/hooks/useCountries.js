import { useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/all`)
      .then((resp) => resp.json())
      .then((data) => {
        // set countries
        setCountries(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return [countries, isLoading, error];
};
