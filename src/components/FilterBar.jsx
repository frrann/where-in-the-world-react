/* eslint-disable react/prop-types */
import Search from "./Search";
import Filter from "./Filter";

const FilterBar = ({ query, setQuery }) => {
  return (
    <div className="filter__bar">
      <Search query={query} setQuery={setQuery} />
      <Filter />
    </div>
  );
};

export default FilterBar;
