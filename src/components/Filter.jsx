/* eslint-disable react/prop-types */

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div className="filter">
      <select id="filter" onChange={handleFilter} value={filter}>
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
