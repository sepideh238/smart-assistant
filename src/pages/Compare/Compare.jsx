import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Compare.scss";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Compare() {
  // این state تعیین می‌کند که جدول مقایسه نمایش داده بشود یا نه
  // در ابتدا false است، یعنی فقط کارت‌ها نمایش داده می‌شوند
  const [showComparison, setShowComparison] = useState(false);

  // این بخش محصولات انتخاب‌شده را از localStorage می‌خواند
  // useMemo باعث می‌شود این محاسبه بی‌دلیل در هر رندر تکرار نشود
  const selectedProducts = useMemo(() => {
    // گرفتن داده ذخیره‌شده با همان کلیدی که در ProductList.jsx استفاده شده
    const savedItems = localStorage.getItem("compareItems");

    // اگر چیزی در localStorage نبود، آرایه خالی برگردان
    if (!savedItems) {
      return [];
    }

    try {
      // تبدیل رشته JSON به آرایه جاوااسکریپتی
      const parsedItems = JSON.parse(savedItems);

      // فقط اگر واقعاً آرایه بود برگردان
      return Array.isArray(parsedItems) ? parsedItems : [];
    } catch (error) {
      // اگر JSON خراب بود، صفحه نباید کرش کند
      return [];
    }
  }, []);

  // لیست مشخصاتی که داخل جدول مقایسه نمایش داده می‌شوند
  // اگر بعضی از این فیلدها داخل محصول نباشند، در جدول "-" نشان داده می‌شود
  const specs = [
    { key: "price", label: "Price" },
    { key: "brand", label: "Brand" },
    { key: "display", label: "Display" },
    { key: "screenSize", label: "Screen Size" },
    { key: "storage", label: "Storage" },
    { key: "ram", label: "RAM" },
    { key: "connectivity", label: "Connectivity" },
  ];

  // این تابع مقدار هر فیلد را برای نمایش آماده می‌کند
  const formatValue = (key, value) => {
    // اگر مقدار خالی بود، به جای آن "-" نشان بده
    if (value === null || value === undefined || value === "") {
      return "-";
    }

    // اگر فیلد قیمت بود، آن را فرمت‌شده نمایش بده
    if (key === "price") {
      return `${Number(value).toLocaleString("en-US")} Toman`;
    }

    // در غیر این صورت همان مقدار را برگردان
    return value;
  };

  // با کلیک روی این دکمه، جدول مقایسه نمایش داده می‌شود
  const handleCompareNow = () => {
    setShowComparison(true);
  };

  return (
    <div className="compare-page container">
      {/* مسیر صفحه */}
      <Breadcrumb />

      {/* هدر بالای صفحه */}
      <PageHeader />

      <section className="compare-section">
        <h2 className="compare-section__title">Product Comparison</h2>

        {/* اگر هیچ محصولی انتخاب نشده باشد */}
        {selectedProducts.length === 0 ? (
          <div className="compare-empty-state">
            <p>No product has been selected for comparison.</p>

            {/* دکمه برگشت به صفحه سرچ */}
            <div className="search-navigation">
              <Link to="/">
                <button className="btn-nav" type="button">
                  Go To Search
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* نمایش کارت‌های محصولات انتخاب‌شده */}
            <div className="compare-products">
              {selectedProducts.map((product) => (
                <div className="compare-product-column" key={product.id}>
                  <ProductCard
                    // خود آبجکت محصول
                    product={product}
                    // عنوان محصول
                    title={product.title}
                    // قیمت محصول
                    price={product.price}
                    // تصویر محصول
                    imageUrl={product.imageUrl}
                    // دکمه compare داخل کارت در این صفحه نباید نمایش داده شود
                    showCompareButton={false}
                  />
                </div>
              ))}
            </div>

            {/* تا قبل از نمایش جدول، فقط دکمه Compare Now دیده می‌شود */}
            {!showComparison && (
              <button
                className="btn-compare-now"
                type="button"
                onClick={handleCompareNow}
              >
                Compare Now
              </button>
            )}

            {/* بعد از کلیک روی Compare Now جدول مقایسه باز می‌شود */}
            {showComparison && (
              <div className="table-scroll-wrapper">
                <div className="compare-specs">
                  {/* هر سطر جدول مربوط به یک مشخصه است */}
                  {specs.map((spec) => (
                    <div className="compare-row" key={spec.key}>
                      {/* عنوان مشخصه */}
                      <div className="compare-spec-title">{spec.label}</div>

                      {/* مقدار همان مشخصه برای هر محصول */}
                      {selectedProducts.map((product) => (
                        <div
                          className="compare-spec-value"
                          key={`${spec.key}-${product.id}`}
                        >
                          {formatValue(spec.key, product[spec.key])}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* دکمه برگشت به سرچ بعد از نمایش محصولات */}
            <div className="search-navigation">
              <Link to="/">
                <button className="btn-nav" type="button">
                  Go To Search
                </button>
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
