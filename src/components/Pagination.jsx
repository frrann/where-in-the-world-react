/* eslint-disable react/prop-types */
import { usePagination, DOTS } from "../hooks/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="pagination-container">
      <li
        key="left_arrow"
        className={`pagination-item ${currentPage === 1 ? "disabled" : null}`}
        onClick={onPrevious}
      >
        <div className="arrow left"></div>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`page${index}`} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={`page${index}`}
            className={`pagination-item ${
              pageNumber === currentPage ? "selected" : null
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        key="right_arrow"
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : null
        }`}
        onClick={onNext}
      >
        <div className="arrow right"></div>
      </li>
    </ul>
  );
};

export default Pagination;
