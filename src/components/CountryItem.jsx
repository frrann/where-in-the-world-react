/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import Card from "./Card";

const CountryItem = ({ country }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/${country.name}`)}>
      <img
        className="country__flag"
        src={country.flags?.png}
        alt={`${country.name}'s flag`}
      />
      <h2 className="country__name">{country.name}</h2>
      <ul className="country__details">
        <li className="country__population">
          <span className="country__details__label">Population: </span>
          {country.population.toLocaleString("en-US")}
        </li>
        <li className="country__region">
          <span className="country__details__label">Region: </span>
          {country.region}
        </li>
        <li className="country__capital">
          <span className="country__details__label">Capital: </span>
          {country.capital}
        </li>
      </ul>
    </Card>
  );
};

export default CountryItem;