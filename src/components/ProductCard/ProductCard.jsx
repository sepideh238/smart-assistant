import React from "react";
import "./ProductCard.scss";

/**
 * کامپوننت کارت محصول
 * این کامپوننت وظیفه نمایش اطلاعات پایه یک محصول را دارد
 */
export default function ProductCard({ product, imageUrl, title, price }) {
  // استخراج اطلاعات محصول با اولویت شیء product
  const image = product?.imageUrl || product?.image || imageUrl || "";
  const productTitle = product?.title || title || "Product";
  const productPrice = product?.price ?? price;

  return (
    <div className="product-card">
      {/* بخش نمایش تصویر محصول */}
      <div className="product-card__image">
        <img src={image} alt={productTitle} />
      </div>

      {/* بخش نمایش اطلاعات متنی محصول */}
      <div className="product-card__info">
        <h3 className="product-card__title">{productTitle}</h3>

        <div className="product-card__price">
          <span className="price-value">
            {/* نمایش قیمت به صورت فرمت شده (مثلاً 25,000,000) */}
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
