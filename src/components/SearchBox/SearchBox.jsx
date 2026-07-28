import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchBox.scss";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  // گرفتن پیشنهادها از json-server
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/suggestions");
        setSuggestions(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, []);

  // فیلتر محلی بر اساس متن تایپ‌شده
  const filteredSuggestions = useMemo(() => {
    return suggestions.filter((item) => {
      const label = typeof item === "string" ? item : item.name || item.title || "";
      return label.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, suggestions]);

  // رفتن به صفحه نتیجه
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setShowSuggestions(false);
    navigate(`/result?query=${encodeURIComponent(search.trim())}`);
  };

  // انتخاب پیشنهاد
  const handleSelectSuggestion = (item) => {
    const label = typeof item === "string" ? item : item.name || item.title || "";
    setSearch(label);
    setShowSuggestions(false);
  };

  // پاک کردن سرچ
  const handleClearSearch = () => {
    setSearch("");
    setShowSuggestions(false);
  };

  // بستن لیست با کلیک بیرون
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

  return (
    <div className="searchbox" ref={searchContainerRef}>
      <div className="search-main">
        <form className="search-form-ltr" role="search" onSubmit={handleSearchSubmit}>
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
            onFocus={() => setShowSuggestions(true)}
          />

          {search && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}

          <button className="search-button-left" type="submit">
            <span className="search-icon-inside">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.51 4.31-1.39l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </span>
          </button>
        </form>

        {search && showSuggestions && (
          <div className="search-suggestions">
            <div className="suggestions-header">Suggested Searches</div>
            <ul className="suggestions-list">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item) => {
                  const label = typeof item === "string" ? item : item.name || item.title || "";
                  const key = typeof item === "string" ? item : item.id ?? label;

                  return (
                    <li
                      key={key}
                      className="suggestion-item"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {label}
                    </li>
                  );
                })
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
