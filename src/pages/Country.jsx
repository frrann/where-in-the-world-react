import { useParams, useNavigate } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";

import CountryDetails from "../components/CountryDetails";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [, country, isLoading, error] = useCountries(countryName);

  return (
    <div className="country">
      <div>
        <div onClick={() => navigate("/")} className="btn">
          <BsArrowLeft /> Back
        </div>
      </div>
      <>
        {!isLoading && country && (
          <CountryDetails country={country} isLoading={isLoading} />
        )}
        {isLoading && <Spinner />}
        {error && <ErrorMessage message={error} />}
      </>
    </div>
  );
};

export default Country;
