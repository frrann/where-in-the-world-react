/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import CountryItem from "./CountryItem";
import Pagination from "./Pagination";

const MAX_NUM_OF_PAGES = 24;

const CountryList = ({ countries, query }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const searchResults = useMemo(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const firstPageIndex = (currentPage - 1) * MAX_NUM_OF_PAGES;
    const lastPageIndex = firstPageIndex + MAX_NUM_OF_PAGES;
    return countries?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, countries]);

  return (
    <>
      {searchResults.length !== 0 ? (
        <div className="search__results">
          <div className="countries">
            {searchResults?.map((country) => (
              <CountryItem country={country} key={country.cca3} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={countries.length}
            pageSize={MAX_NUM_OF_PAGES}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      ) : (
        <h1 style={{ padding: "1vh 5vw" }}>
          No results found for the search: &quot;{query}&quot;.
        </h1>
      )}
    </>
  );
};

export default CountryList;
