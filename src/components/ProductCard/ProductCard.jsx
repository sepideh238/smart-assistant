import React from "react";
import "./ProductCard.scss";

export default function ProductCard({
  product,
  imageUrl,
  title,
  price,
  onCompare,
  isCompareDisabled = false,
  showCompareButton = true,
  isSelected = false,
}) {
  // اطلاعات اصلی را ترجیحاً از خود product می‌گیریم
  // اگر بعضی فیلدها نبودند، از propهای جداگانه استفاده می‌کنیم
  const image = product?.imageUrl || product?.image || imageUrl || "";
  const productTitle = product?.title || title || "Product";
  const productPrice = product?.price ?? price;

  const handleCompareClick = (event) => {
    // جلوگیری از اثر کلیک روی والدهای احتمالی کارت
    event.stopPropagation();

    // فقط اگر product و onCompare موجود باشند، عملیات انتخاب/حذف انجام می‌شود
    if (product && onCompare) {
      onCompare(product);
    }
  };

  return (
    // اگر این محصول انتخاب شده باشد، کلاس is-selected به کارت اضافه می‌شود
    <div className={`product-card ${isSelected ? "is-selected" : ""}`}>
      <div className="product-card__image">
        <img src={image} alt={productTitle} />
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">{productTitle}</h3>

        <div className="product-card__price">
          <span className="price-value">
            {/* اگر قیمت عدد باشد، به صورت فرمت‌شده نمایش داده می‌شود */}
            {typeof productPrice === "number"
              ? productPrice.toLocaleString("en-US")
              : productPrice}
          </span>
          <span className="price-currency"> T </span>
        </div>

        {/* در بعضی صفحه‌ها ممکن است نخواهیم دکمه Compare نمایش داده شود */}
        {showCompareButton && (
          <button
            type="button"
            className={`product-card__compare-btn ${
              isSelected ? "is-selected" : ""
            }`}
            onClick={handleCompareClick}
            disabled={isCompareDisabled}
          >
            {/* متن دکمه بر اساس وضعیت انتخاب تغییر می‌کند */}
            {isSelected ? "Selected" : "Compare"}
          </button>
        )}
      </div>
    </div>
  );
}
