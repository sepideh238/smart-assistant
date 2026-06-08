import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import CategoryList from "../../components/CategoryList/CategoryList";
import "./Search.scss"; // این فایل در قدم بعدی جادو می‌کند

export default function Search() {
  return (
    <div className="search-page">
      {/* بخش بالایی شامل عنوان و باکس جستجو */}
      <div className="search-page__header">
        <h1>Smart Assistant</h1>
        <div className="search-page__box-container">
          <SearchBox />
        </div>
      </div>

      {/* 
          بخش بسیار مهم:
          این DIV همان ظرفی است که کارت‌ها را به صورت 4 تایی می‌چیند.
          کلاس search-results-grid را به دقت بنویس.
      */}
      <div className="search-results-grid">
        <CategoryList />
      </div>

      {/* دکمه‌های ناوبری پایین صفحه */}
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
