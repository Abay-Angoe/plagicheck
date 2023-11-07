import React from 'react';
import { StyledPagination } from './Pagination_styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pagesToShow: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pagesToShow = 5,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <StyledPagination>
      <div className="pagination">
        <button
          className="prev"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
          <button
            key={pageNumber}
            id="pagebtn"
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
