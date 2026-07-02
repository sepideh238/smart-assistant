import React, { useState, useEffect, useRef } from "react";
import "./SearchBox.scss";

export default function SearchBox() {
  // --- States ---
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null); // برای تشخیص کلیک بیرون از کادر سرچ

  // --- دیتای نمونه ---
  const suggestions = [
  "Wireless Headphones",
  "Smartphones",
  "Laptop",
  "Running Shoes",
  "Smart Watch",
  "Apple iPhone 14",
  "Samsung Galaxy S23",
  "MacBook Pro",
  "Tablet",
  "Samsung Tablet",
  "Apple iPad"
];

  // --- منطق فیلتر کردن ---
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // --- بستن لیست وقتی کاربر بیرون از سرچ‌باکس کلیک می‌کند (UX حرفه‌ای) ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="searchbox" ref={searchContainerRef}>
      <div className="search-main">
        {/* فرم جستجو */}
        <form
          className="search-form-ltr"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="search-icon-right-overlay" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>

          <input
            className="search-input-ltr"
            type="search"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)} // وقتی روی اینپوت کلیک کرد لیست باز شود
          />

          <button className="search-button-left" type="submit">
            <span className="search-icon-inside">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </span>
          </button>
        </form>

        {/* لیست پیشنهادات (فقط در صورت وجود متن و فعال بودن نمایش) */}
        {search !== "" && showSuggestions && (
          <div className="search-suggestions">
            <div className="suggestions-header">Suggested Searches</div>
            <ul className="suggestions-list">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item) => (
                  <li
                    className="suggestion-item"
                    key={item}
                    onClick={() => {
                      setSearch(item);
                      setShowSuggestions(false);
                    }}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="suggestion-item no-result">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
