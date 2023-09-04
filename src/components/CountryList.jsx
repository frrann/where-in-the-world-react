/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <CountryItem country={country} key={country.alpha3Code} />
      ))}
    </div>
  );
};

export default CountryList;
