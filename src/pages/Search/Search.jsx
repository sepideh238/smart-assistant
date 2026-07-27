import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchBox from "../../components/SearchBox/SearchBox";
import CategoryList from "../../components/CategoryList/CategoryList";

import "./Search.scss";

export default function Search() {
  // state برای ذخیره دسته‌بندی‌ها
  const [categories, setCategories] = useState([]);

  // state برای نمایش وضعیت لود
  const [loading, setLoading] = useState(true);

  // state برای مدیریت خطا
  const [error, setError] = useState("");

  useEffect(() => {
    // تابع دریافت داده از json-server
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");

        // درخواست به API
        const response = await axios.get("http://localhost:3001/categories");

        // ذخیره مستقیم داده‌ها در state
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("دریافت اطلاعات دسته‌بندی‌ها با خطا مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="search-page container">
      {/* هدر صفحه */}
      <div className="search-page__header">
        <h1>Smart Assistant</h1>

        <div className="search-page__box-container">
          <SearchBox />
        </div>
      </div>

      {/* نمایش وضعیت لود */}
      {loading && <p className="search-page__message">در حال بارگذاری...</p>}

      {/* نمایش خطا */}
      {!loading && error && (
        <p className="search-page__message search-page__message--error">
          {error}
        </p>
      )}

      {/* اگر لود تمام شده و خطا نداشتیم، لیست نمایش داده شود */}
      {!loading && !error && (
        <div className="search-results-grid">
          <CategoryList categories={categories} />
        </div>
      )}

      {/* دکمه‌های ناوبری */}
      <div className="search-navigation">
        <Link to="/result">
          <button className="btn-nav">Go To Result</button>
        </Link>

        <Link to="/compare">
          <button className="btn-nav btn-nav--secondary">
            Go To Compare
          </button>
        </Link>
      </div>
    </div>
  );
}
