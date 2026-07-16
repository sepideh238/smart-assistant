import React from "react";
import "./ProductCard.scss";

// استفاده از سبک export default function برای تعریف کامپوننت
export default function ProductCard({
  product,
  imageUrl,
  title,
  price,
  onCompare, 
  isCompareDisabled = false, 
  showCompareButton = true, 
}) {
  // استخراج داده‌ها: اولویت با شیء product است، اگر نبود از props تکی استفاده می‌شود
  const image = product?.imageUrl || imageUrl;
  const productTitle = product?.title || title;
  const productPrice = product?.price || price;

  // تابعی برای مدیریت کلیک روی دکمه مقایسه
  const handleCompareClick = (event) => {
    // جلوگیری از پخش شدن رویداد کلیک به لایه‌های بالاتر (والد)
    event.stopPropagation();

    // اگر والد (ProductList) تابعی برای مقایسه فرستاده باشد، آن را با اطلاعات محصول اجرا کن
    if (onCompare) {
      onCompare(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={productTitle || "product"} />
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">{productTitle}</h3>

        <div className="product-card__price">
          <span className="price-value">
            {productPrice?.toLocaleString("en-US")}
          </span>
          <span className="price-currency"> T </span>
        </div>

        {/* نمایش دکمه مقایسه به صورت شرطی بر اساس پراپ showCompareButton */}
        {showCompareButton && (
          <button
            type="button"
            className="product-card__compare-btn"
            onClick={handleCompareClick}
            disabled={isCompareDisabled}
          >
            Compare
          </button>
        )}
      </div>
    </div>
  );
}
