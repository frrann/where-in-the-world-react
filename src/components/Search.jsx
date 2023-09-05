/* eslint-disable react/prop-types */

import { IoMdSearch } from "react-icons/io";

const Search = ({ query, setQuery }) => {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search">
      <IoMdSearch />
      <input
        id="search"
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
};

export default Search;
