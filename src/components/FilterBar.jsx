/* eslint-disable react/prop-types */
import Search from "./Search";
import Filter from "./Filter";

const FilterBar = ({ query, setQuery, filter, setFilter }) => {
  return (
    <div className="filter__bar">
      <Search query={query} setQuery={setQuery} />
      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default FilterBar;
