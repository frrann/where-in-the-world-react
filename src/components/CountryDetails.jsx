/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div className="country">
      <div>
        <div onClick={() => navigate("/")} className="btn">
          <BsArrowLeft /> Back
        </div>
      </div>
      <div className="country__info">
        <div className="country__info--st-section">
          <img
            className="country__flag"
            src={country.flags?.png}
            alt={`${country.name}'s flag`}
          />
        </div>
        <div className="country__info--nd-section">
          <h2>{country.name}</h2>
          <div className="country__info--nd-section__list">
            <ul>
              <li>
                Native name: <span>{country.nativeName}</span>
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
                  Capital: <span>{country.capital}</span>
                </li>
              )}
            </ul>
            <ul>
              <li>
                Top Level Domain: <span>{country.topLevelDomain[0]}</span>
              </li>
              {country.currencies && (
                <li>
                  Currencies:
                  <span>
                    {" "}
                    {country.currencies.map(
                      (curr, index) =>
                        `${curr.name}${
                          index !== country.currencies.length - 1 ? ", " : ""
                        }`
                    )}
                  </span>
                </li>
              )}
              <li>
                Languages:
                <span>
                  {" "}
                  {country.languages.map(
                    (lng, index) =>
                      `${lng.name}${
                        index !== country.languages.length - 1 ? ", " : ""
                      }`
                  )}
                </span>
              </li>
            </ul>
          </div>
          {country.borders && (
            <div className="neighbours__list">
              <h3>Border Countries:</h3>
              <div className="neighbours__list--section">
                {country.borders.map((border) => (
                  <span className="neighbour" key={border}>
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
