/* eslint-disable react/prop-types */
const ErrorMessage = ({ message = undefined }) => {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
};

export default ErrorMessage;
