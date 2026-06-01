import "./SearchBox.scss";

export default function SearchBox() {
  return (
    <div className="searchbox">
  <form className="search-form-ltr" role="search">
   
    {/* 1. اینپوت جستجو با placeholder */}
    <input
      className="search-input-ltr"
      type="search"
      placeholder="Search for products..."
      aria-label="Search"
    />

    {/* 2. آیکون جستجو در سمت راست (داخل اینپوت به نظر می‌رسد) */}
    <span className="search-icon-right-overlay" aria-hidden="true">
      {/* آیکون ذره‌بین */}
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    </span>
     {/* 3. دکمه با آیکون جستجو در سمت چپ */}
     <button className="search-button-left" type="button">
      <span className="search-icon-inside" aria-hidden="true">
        {/* آیکون ذره‌بین */}
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </span>
    </button>
  </form>

       {/* =========================
          2) پیشنهادها (نمایش داده شده)
         ========================= */}
       <div className="search-suggestions" aria-hidden="true">
      <div className="suggestions-header">Suggested Searches</div>
        <ul className="suggestions-list">
        <li className="suggestion-item">Wireless Headphones</li>
          <li className="suggestion-item">Smartphones</li>
          <li className="suggestion-item">Laptop</li>
          <li className="suggestion-item">Running Shoes</li>
          <li className="suggestion-item">Smart Watch</li>
        </ul>
      </div>
    </div>
  );
}
