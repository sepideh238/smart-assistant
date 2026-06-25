import React, { useState } from "react";
import "./PageHeader.scss";

export default function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Popularity");

  const options = [
    "Popularity",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="page-header">
      {/* بخش سمت چپ: شامل عنوان و زیرعنوان */}
      <div className="header-info-group">
        <h1 className="main-title">Search Results for 'tablet'</h1>
        <p className="sub-title">Showing 1-12 of 58 results</p>
      </div>

      {/* بخش سمت راست: مرتب‌سازی سفارشی (حل مشکل بیرون‌زدگی) */}
      <div className="header-sort-group">
        <span className="sort-label">Sort by:</span>
        
        <div className={`custom-dropdown ${isOpen ? "is-active" : ""}`}>
          <button 
            className="dropdown-button" 
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {selected}
            <span className="arrow-icon">▼</span>
          </button>

          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li 
                  key={option} 
                  className={`dropdown-item ${selected === option ? "selected" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
