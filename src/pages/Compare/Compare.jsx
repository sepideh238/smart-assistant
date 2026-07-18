import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Compare.scss";
import CompareTable from "../../components/CompareTable/CompareTable";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";

/**
 * نقشه‌ی کمکی برای پیدا کردن ظرفیت حافظه بر اساس ID محصول
 * این بخش برای زمانی است که داده‌های قدیمی در LocalStorage هنوز فیلد storage ندارند.
 */
const storageMap = {
  1: "128GB",
  2: "128GB",
  3: "256GB",
  4: "128GB",
  5: "64GB",
  6: "128GB",
  7: "64GB",
  8: "32GB",
  9: "32GB",
  10: "128GB",
  11: "64GB",
  12: "32GB",
};

/**
 * تابع کمکی برای خواندن محصولات از LocalStorage
 * این تابع هوشمند است: اگر محصولی استوریج نداشت، آن را از نقشه بالا برمی‌دارد.
 */
const getStoredProducts = () => {
  const savedItems = localStorage.getItem("compareItems");

  if (!savedItems) return [];

  try {
    const parsedItems = JSON.parse(savedItems);

    if (!Array.isArray(parsedItems)) return [];

    // ایجاد یک لیست جدید که حتماً فیلد storage داشته باشد
    return parsedItems.map((item) => ({
      ...item,
      // اگر استوریج داشت همان را بردار، وگرنه از storageMap پیدا کن
      storage: item.storage || storageMap[item.id] || "-",
    }));
  } catch (error) {
    console.error("Error parsing compare items:", error);
    return [];
  }
};

/**
 * تعریف ستون‌های جدول مقایسه
 */
const specs = [
  { key: "title", label: "Product Name" },
  { key: "price", label: "Price" },
  { key: "storage", label: "Storage" },
];

export default function Compare() {
  // وضعیت نمایش یا عدم نمایش جدول مقایسه
  const [showComparison, setShowComparison] = useState(false);
  
  // نگهداری لیست محصولات انتخاب شده در State
  const [selectedProducts, setSelectedProducts] = useState(getStoredProducts);

  useEffect(() => {
    // تابعی که هنگام تغییر در لیست مقایسه (از صفحات دیگر) اجرا می‌شود
    const handleCompareUpdated = () => {
      setSelectedProducts(getStoredProducts());
    };

    // گوش دادن به رویداد سفارشی برای آپدیت آنی صفحه
    window.addEventListener("compareUpdated", handleCompareUpdated);

    // پاکسازی Event Listener هنگام خروج از کامپوننت
    return () => {
      window.removeEventListener("compareUpdated", handleCompareUpdated);
    };
  }, []);

  // هندلر کلیک روی دکمه Compare Now
  const handleCompareNow = () => {
    setShowComparison(true);
  };

  return (
    <div className="compare-page container">
      {/* بخش هدر و مسیر راهنما */}
      <Breadcrumb />
      <PageHeader />

      <section className="compare-section">
        <h2 className="compare-section__title">Product Comparison</h2>

        {/* اگر محصولی انتخاب نشده باشد، پیام خالی بودن نمایش داده می‌شود */}
        {selectedProducts.length === 0 ? (
          <div className="compare-empty-state">
            <p>No product has been selected for comparison.</p>
            <div className="search-navigation">
              <Link className="btn-nav" to="/">
                Go To Search
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* نمایش کارت محصولات در بالای جدول */}
            <div className="compare-products">
              {selectedProducts.map((product) => (
                <div className="compare-product-column" key={product.id}>
                  <ProductCard
                    product={product}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    showCompareButton={false} // دکمه مقایسه در اینجا مخفی می‌شود
                  />
                </div>
              ))}
            </div>

            {/* دکمه برای نمایش جدول نهایی مقایسه */}
            {!showComparison && (
              <button
                className="btn-compare-now"
                type="button"
                onClick={handleCompareNow}
              >
                Compare Now
              </button>
            )}

            {/* رندر کردن جدول مقایسه در صورت تایید کاربر */}
            {showComparison && (
              <CompareTable products={selectedProducts} specs={specs} />
            )}

            {/* دکمه بازگشت به صفحه جستجو */}
            <div className="search-navigation">
              <Link className="btn-nav" to="/">
                Go To Search
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
