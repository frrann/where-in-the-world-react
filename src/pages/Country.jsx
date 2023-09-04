import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";
import data from "../data/data.json";

const Country = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const receivedCountry = data.filter(
      (country) => country.name === countryName
    )[0];
    setCountry(receivedCountry);
  }, [countryName]);

  return <CountryDetails country={country} />;
};

export default Country;
