/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CountryDetails = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div className="country" style={{ height: "100vh" }}>
      <div>
        <button onClick={() => navigate("/")} className="btn">
          &larr; Back
        </button>
      </div>
      <div>
        <h2>{country.name}</h2>
      </div>
    </div>
  );
};

export default CountryDetails;
