/* eslint-disable react/prop-types */
const Card = ({ children, className }) => {
  return <div className={`${className} card`}>{children}</div>;
};

export default Card;
