import Search from "./Search";
import Filter from "./Filter";

const FilterBar = () => {
  return (
    <div className="filter__bar">
      <Search />
      <Filter />
    </div>
  );
};

export default FilterBar;
