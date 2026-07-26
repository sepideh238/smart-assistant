import React from "react";
import "./ProductCard.scss";

export default function ProductCard({
  product,
  imageUrl,
  title,
  price,
  isSelected,
  onToggleCompare,
}) {
  // اگر آبجکت کامل product پاس شده باشد، اولویت با همان است.
  // در غیر این صورت از پراپ‌های جداگانه استفاده می‌کنیم.
  const image = product?.imageUrl || product?.image || imageUrl || "";
  const productTitle = product?.title || title || "Product";
  const productPrice = product?.price ?? price;

  // این کامپوننت فقط کلیک را به والد اعلام می‌کند.
  // منطق add/remove/limit در ProductList مدیریت می‌شود.
  const handleCardClick = () => {
    onToggleCompare(product);
  };

  return (
    <div
      className={`product-card ${isSelected ? "product-card--selected" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      {/* 
        فقط در حالت انتخاب‌شده، یک دایره سبز با تیک نمایش داده می‌شود.
        هیچ متن اضافه‌ای مثل Selected نباید اینجا باشد.
      */}
      {isSelected && <div className="product-card__badge">✓</div>}

      {/* تصویر محصول */}
      <div className="product-card__image">
        <img src={image} alt={productTitle} />
      </div>

      {/* اطلاعات محصول */}
      <div className="product-card__info">
        <h3 className="product-card__title">{productTitle}</h3>

        <div className="product-card__price">
          <span className="price-value">
            {typeof productPrice === "number"
              ? productPrice.toLocaleString("en-US")
              : productPrice}
          </span>
          <span className="price-currency"> T </span>
        </div>
      </div>
    </div>
  );
}
