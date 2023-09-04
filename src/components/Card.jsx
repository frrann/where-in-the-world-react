/* eslint-disable react/prop-types */
const Card = ({ children, className, onClick }) => {
  return (
    <div className={`${className ? className : null} card`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
