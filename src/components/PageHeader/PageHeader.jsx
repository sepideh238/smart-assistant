import "./PageHeader.scss";

export default function PageHeader() {
  return (
    <div className="page-header">
      {/* بخش سمت چپ: شامل عنوان و زیرعنوان به صورت ستونی */}
      <div className="header-info-group">
        <h1 className="main-title">Search Results for 'tablet'</h1>
        <p className="sub-title">Showing 1-12 of 58 results</p>
      </div>

      {/* بخش سمت راست: مرتب‌سازی */}
      <div className="header-sort-group">
        <span className="sort-label">Sort by:</span>
        <select className="sort-select">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
