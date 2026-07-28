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
  // ۱. استخراج داده‌ها: اولویت اول با آبجکت کامل محصول است که از API می‌آید
  // استفاده از product?.imageUrl باعث می‌شود مسیرهایی مثل "/images/products/..." درست خوانده شوند
  const image = product?.imageUrl || imageUrl || ""; 
  const productTitle = product?.title || title || "Product";
  const productPrice = product?.price ?? price ?? 0;

  // ۲. مدیریت کلیک: این تابع فقط به والد (ProductList) خبر می‌دهد که کاربر روی کارت کلیک کرده
  const handleCardClick = () => {
    if (onToggleCompare) {
      onToggleCompare(product);
    }
  };

  return (
    <div
      className={`product-card ${isSelected ? "product-card--selected" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      {/* نمایش تیک سبز در صورت انتخاب شدن محصول */}
      {isSelected && <div className="product-card__badge">✓</div>}

      {/* تصویر محصول */}
      <div className="product-card__image">
        {/* چون تصاویر در پوشه public قرار دارند، آدرس‌های شروع شده با / مستقیماً از روت خوانده می‌شوند */}
        <img src={image} alt={productTitle} />
      </div>

      {/* اطلاعات محصول */}
      <div className="product-card__info">
        <h3 className="product-card__title">{productTitle}</h3>

        <div className="product-card__price">
          <span className="price-value">
            {/* فرمت کردن قیمت بر اساس استانداردهای عددی */}
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
