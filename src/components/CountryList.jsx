/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import CountryItem from "./CountryItem";
import Pagination from "./Pagination";

const MAX_NUM_OF_PAGES = 24;

const CountryList = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const searchResults = useMemo(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const firstPageIndex = (currentPage - 1) * MAX_NUM_OF_PAGES;
    const lastPageIndex = firstPageIndex + MAX_NUM_OF_PAGES;
    return countries.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, countries]);

  return (
    <div className="search__results">
      <div className="countries">
        {searchResults.map((country) => (
          <CountryItem country={country} key={country.alpha3Code} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={countries.length}
        pageSize={MAX_NUM_OF_PAGES}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CountryList;
