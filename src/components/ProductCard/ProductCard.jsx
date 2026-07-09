import React from "react";
import "./ProductCard.scss";

const ProductCard = ({
  product,
  imageUrl,
  title,
  price,
  onCompare, // تابعی که بعداً برای افزودن محصول به لیست مقایسه استفاده می‌کنیم
  isCompareDisabled = false, // برای غیرفعال‌کردن دکمه در صورت نیاز
  showCompareButton = true, // ۱. این پراپ جدید با مقدار پیش‌فرض true اضافه شد
}) => {
  // اگر product وجود داشته باشد، اطلاعات را از آن می‌گیریم
  // وگرنه از props تکی imageUrl / title / price استفاده می‌کنیم
  const image = product?.image || imageUrl;
  const productTitle = product?.title || title;
  const productPrice = product?.price || price;

  // کلیک روی دکمه Compare
  const handleCompareClick = (event) => {
    // جلوگیری از انتشار کلیک به والد
    // مفید است اگر بعداً کل کارت clickable باشد
    event.stopPropagation();

    // اگر تابع onCompare ارسال شده باشد، آن را با خود محصول صدا می‌زنیم
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

        {/* ۲. شرط نمایش دکمه مقایسه: فقط اگر showCompareButton فعال باشد نشان داده می‌شود */}
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
};

export default ProductCard;
