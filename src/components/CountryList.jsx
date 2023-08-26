/* eslint-disable react/prop-types */
import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country country={country} key={country.alpha3Code} />
      ))}
    </div>
  );
};

export default CountryList;
