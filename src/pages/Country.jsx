import { useParams } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";
import data from "../data/data.json";

const Country = () => {
  const { countryName } = useParams();
  const country = data.filter((country) => country.name === countryName)[0];

  return <CountryDetails country={country} />;
};

export default Country;
