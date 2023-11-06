/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CountryDetails = ({ country, borderCountries = [] }) => {
  return (
    <div className="country__info">
      <div className="country__info--st-section">
        <img
          className="country__flag"
          src={country.flags?.png}
          alt={`${country.name}'s flag`}
        />
      </div>
      <div className="country__info--nd-section">
        <h2>{country.name?.common}</h2>
        <div className="country__info--nd-section__list">
          <ul>
            <li>
              Native name:{" "}
              <span>
                {
                  country.name?.nativeName[
                    Object.keys(country.name?.nativeName)[0]
                  ]?.common
                }
              </span>
            </li>
            <li>
              Population:{" "}
              <span>{country.population.toLocaleString("en-US")}</span>
            </li>
            <li>
              Region: <span>{country.region}</span>
            </li>
            <li>
              Sub Region: <span>{country.subregion}</span>
            </li>
            {country.capital && (
              <li>
                Capital: <span>{country.capital[0]}</span>
              </li>
            )}
          </ul>
          <ul>
            <li>
              Top Level Domain: <span>{country.tld[0]}</span>
            </li>
            {country.currencies && (
              <li>
                Currencies:
                <span>
                  {" "}
                  {Object.values(country.currencies)
                    .map((currency) => currency?.name)
                    .join(", ")}
                </span>
              </li>
            )}
            <li>
              Languages:
              <span> {Object.values(country.languages).join(", ")}</span>
            </li>
          </ul>
        </div>
        {country.borders && (
          <div className="neighbours__list">
            <h3>Border Countries:</h3>
            <div className="neighbours__list--section">
              {borderCountries.map((border) => (
                <Link
                  to={`/${border[0]?.name?.common}`}
                  className="neighbour"
                  key={border[0]?.cca3}
                >
                  {border[0]?.name?.common}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
