export default function FilterButton({ from, to, total, valuePerPage, onChangePerPage, valueSort, onChangeSort }) {
  return (
    <div className="filter">
      <p>
        Showing {from} - {to} of {total}
      </p>
      <div className="btn-pages">
        <div className="filter-btn">
          <label htmlFor="pages">Show per page: </label>
          <select name="pages" id="pages" value={valuePerPage} onChange={onChangePerPage}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="sort-btn">
          <label htmlFor="sorts">Sort by: </label>
          <select name="sorts" id="sorts" value={valueSort} onChange={onChangeSort}>
            <option value="Newest">Newest</option>
            <option value="Latest">Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
