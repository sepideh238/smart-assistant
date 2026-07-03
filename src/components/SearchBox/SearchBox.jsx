import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.scss";

export default function SearchBox() {
  // ==========================================
  // ۱. تعریف وضعیت‌ها (States) و هوک‌های پایه
  // ==========================================
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  // داده‌های نمونه پیشنهادها
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

  // عملیات فیلترینگ لیست بر اساس مقدار تایپ شده
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // ==========================================
  // ۲. توابع هندلر (Handlers)
  // ==========================================

  // مدیریت ارسال فرم (هدایت کاربر به صفحه نتایج با پارامتر query)
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (search.trim() !== "") {
      setShowSuggestions(false);
      navigate(`/result?query=${encodeURIComponent(search.trim())}`);
    }
  };

  // مدیریت انتخاب یکی از آیتم‌ها از لیست پیشنهادات
  const handleSelectSuggestion = (selectedItem) => {
    setSearch(selectedItem);
    setShowSuggestions(false);
  };

  // مدیریت پاک کردن متن ورودی (توسط ضربدر سفارشی ما)
  const handleClearSearch = () => {
    setSearch(""); // خالی کردن متن اینپوت
    setShowSuggestions(false); // بستن لیست پیشنهادها
  };

  // بستن منوی پیشنهادات با کلیک روی هر نقطه خارج از کادر جستجو
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ==========================================
  // ۳. خروجی و ساختار کامپوننت (UI/JSX)
  // ==========================================
  return (
    <div className="searchbox" ref={searchContainerRef}>
      <div className="search-main">
        
        <form
          className="search-form-ltr"
          role="search"
          onSubmit={handleSearchSubmit}
        >
          {/* آیکن ذره‌بین در سمت چپ اینپوت به عنوان لایه رویی ثابت */}
          <span className="search-icon-right-overlay" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>

          {/* فیلد ورودی متن */}
          <input
            className="search-input-ltr"
            type="search"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => {
              if (search.trim() !== "") {
                setShowSuggestions(true);
              }
            }}
          />

          {/* ضربدر سفارشی (فقط زمانی که کاربر چیزی تایپ کرده باشد نشان داده می‌شود) */}
          {search !== "" && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              {/* آیکن ضربدر دیجی‌کالایی ملایم */}
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}

          {/* دکمه قرمز رنگ سرچ */}
          <button className="search-button-left" type="submit">
            <span className="search-icon-inside">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </span>
          </button>
        </form>

        {/* لیست پیشنهادات هوشمند */}
        {search !== "" && showSuggestions && (
          <div className="search-suggestions">
            <div className="suggestions-header">Suggested Searches</div>
            <ul className="suggestions-list">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item) => (
                  <li
                    className="suggestion-item"
                    key={item}
                    onClick={() => handleSelectSuggestion(item)}
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
