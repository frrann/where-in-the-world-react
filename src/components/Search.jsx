import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="search">
      <IoMdSearch />
      <input id="search" type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default Search;
