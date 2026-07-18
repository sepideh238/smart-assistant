import React from "react";
import "./CompareTable.scss";

export default function CompareTable({ products, specs }) {
  // مقدار هر فیلد را قبل از نمایش داخل جدول فرمت می‌کند
  const formatValue = (key, value) => {
    // اگر مقدار خالی بود، به جای آن خط تیره نشان بده
    if (value === null || value === undefined || value === "") {
      return "-";
    }

    // اگر فیلد قیمت بود، آن را به صورت عدد فرمت‌شده نمایش بده
    if (key === "price") {
      const numericValue = Number(value);

      if (Number.isNaN(numericValue)) {
        return "-";
      }

      return `${numericValue.toLocaleString("en-US")} Toman`;
    }

    // بقیه مقادیر بدون تغییر نمایش داده می‌شوند
    return value;
  };

  return (
    <div className="table-scroll-wrapper">
      {/* تعداد ستون‌های جدول را بر اساس تعداد محصولات به CSS می‌فرستیم */}
      <div
        className="compare-specs"
        style={{ "--compare-columns": products.length }}
      >
        {specs.map((spec) => (
          <div className="compare-row" key={spec.key}>
            {/* عنوان هر ویژگی مثل Price یا Brand */}
            <div className="compare-spec-title">{spec.label}</div>

            {/* مقدار همان ویژگی برای هر محصول */}
            {products.map((product) => (
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
  );
}
