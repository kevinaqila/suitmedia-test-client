export default function PageButton({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const maxVisible = 5;
  let startPage, endPage;

  if (totalPages <= maxVisible) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const half = Math.floor(maxVisible / 2);
    if (currentPage <= half) {
      startPage = 1;
      endPage = maxVisible;
    } else if (currentPage + half >= totalPages) {
      startPage = totalPages - maxVisible + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - half;
      endPage = currentPage + half;
    }
  }

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pages-button">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        &lt;&lt;
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>

      <div className="number-pages">
        {pageNumber.map((page) => (
          <button key={page} className={page === currentPage ? "active" : ""} onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
      </div>

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        &gt;&gt;
      </button>
    </div>
  );
}
