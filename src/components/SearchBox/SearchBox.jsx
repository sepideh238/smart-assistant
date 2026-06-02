import "./SearchBox.scss";

export default function SearchBox() {
  // =========================================================
  // داده نمونه (بعداً می‌تونی از API یا state پرش کنی)
  // =========================================================
  const suggestions = [
    "Wireless Headphones",
    "Smartphones",
    "Laptop",
    "Running Shoes",
    "Smart Watch",
  ];

  return (
    // =========================================================
    // کانتینر اصلی کامپوننت
    // =========================================================
    <div className="searchbox">
      <div className="search-main">
        {/* =====================================================
            1) فرم جستجو
            - دکمه داخل فرم است تا submit درست کار کند
            - چیدمان با CSS Grid انجام می‌شود (input | button)
        ===================================================== */}
        <form
          className="search-form-ltr"
          role="search"
          onSubmit={(e) => e.preventDefault()} // فعلاً برای جلوگیری از رفرش صفحه (در پروژه واقعی حذف/تعویض شود)
        >
          {/* آیکن داخل اینپوت (نمایشی) */}
          <span className="search-icon-right-overlay" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>

          {/* اینپوت جستجو */}
          <input
            className="search-input-ltr"
            type="search"
            placeholder="Search for products..."
            aria-label="Search"
          />

          {/* دکمه submit جستجو */}
          <button className="search-button-left" type="submit" aria-label="Search">
            <span className="search-icon-inside" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </span>
          </button>
        </form>

        {/* =====================================================
            2) لیست پیشنهادات
            - زیر فرم نمایش داده می‌شود
            - هم‌عرض input است (نه هم‌عرض کل فرم)
        ===================================================== */}
        <div className="search-suggestions">
          <div className="suggestions-header">Suggested Searches</div>

          <ul className="suggestions-list">
            {suggestions.map((item) => (
              <li className="suggestion-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
