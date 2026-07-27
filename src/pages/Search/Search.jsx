// ایمپورت کردن React و هوک‌های موردنیاز
import React, { useEffect, useState } from "react";

// برای جابه‌جایی بین صفحه‌ها
import { Link } from "react-router-dom";

// کامپوننت باکس جستجو
import SearchBox from "../../components/SearchBox/SearchBox";

// کامپوننت نمایش لیست دسته‌بندی‌ها
import CategoryList from "../../components/CategoryList/CategoryList";

// تابع گرفتن دسته‌بندی‌ها از فایل سرویس
import { getCategories } from "../../services/categoryService";

// فایل استایل مربوط به صفحه Search
import "./Search.scss";

// کامپوننت اصلی صفحه Search
export default function Search() {
  // state برای نگهداری لیست دسته‌بندی‌ها
  // در ابتدا یک آرایه خالی است چون هنوز داده‌ای از API نگرفته‌ایم
  const [categories, setCategories] = useState([]);

  // useEffect زمانی اجرا می‌شود که کامپوننت برای اولین بار لود شود
  useEffect(() => {
    // صدا زدن تابع getCategories برای گرفتن داده‌ها از API
    getCategories()
      .then((response) => {
        // وقتی داده‌ها با موفقیت دریافت شدند
        // response.data شامل اطلاعات دسته‌بندی‌هاست
        // آن را داخل state ذخیره می‌کنیم
        setCategories(response.data);
      })
      .catch((error) => {
        // اگر هنگام دریافت داده خطایی رخ داد
        // خطا را در console نمایش می‌دهیم
        console.error("Error fetching categories:", error);
      });
  }, []);
  // آرایه خالی یعنی این useEffect فقط یک بار
  // هنگام اولین render شدن کامپوننت اجرا می‌شود

  return (
    <div className="search-page container">
      {/* بخش بالای صفحه */}
      <div className="search-page__header">
        <h1>Smart Assistant</h1>

        {/* باکس جستجو */}
        <div className="search-page__box-container">
          <SearchBox />
        </div>
      </div>

      {/* بخش نمایش دسته‌بندی‌ها */}
      <div className="search-results-grid">
        {/* 
          داده‌های categories به CategoryList ارسال می‌شوند
          این داده‌ها دیگر mock نیستند و از API آمده‌اند
        */}
        <CategoryList categories={categories} />
      </div>

      {/* دکمه‌های پایین صفحه برای رفتن به صفحات دیگر */}
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
