/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Link to={country.name} key={country.alpha3Code}>
          <CountryItem country={country} />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
