import { useParams, useNavigate } from "react-router-dom";
import { useCountry } from "../hooks/useCountry";

import CountryDetails from "../components/CountryDetails";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [borderCountries, country, isLoading, error] = useCountry(countryName);

  return (
    <div className="country">
      <div>
        <div onClick={() => navigate("/")} className="btn btn-back">
          <BsArrowLeft /> Back
        </div>
      </div>
      <>
        {!isLoading && country && (
          <CountryDetails
            country={country}
            isLoading={isLoading}
            borderCountries={borderCountries}
          />
        )}
        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}
      </>
    </div>
  );
};

export default Country;
