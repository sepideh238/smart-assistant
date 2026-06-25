import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import CategoryList from "../../components/CategoryList/CategoryList";
import "./Search.scss"; // این فایل در قدم بعدی جادو می‌کند

export default function Search() {
  return (
    // ترکیب کلاس صفحه و کانتینر برای یکپارچگی
    <div className="search-page container">
      
      {/* بخش بالایی */}
      <div className="search-page__header">
        <h1>Smart Assistant</h1>
        <div className="search-page__box-container">
          <SearchBox />
        </div>
      </div>

      {/* بخش لیست دسته‌بندی‌ها */}
      <div className="search-results-grid">
        <CategoryList />
      </div>

      {/* دکمه‌های ناوبری */}
      <div className="search-navigation">
        <Link to="/result">
          <button className="btn-nav">Go To Result</button>
        </Link>
        <Link to="/compare">
          <button className="btn-nav btn-nav--secondary">Go To Compare</button>
        </Link>
      </div>
    </div>
  );
}

