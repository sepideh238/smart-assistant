import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ imageUrl, title, price }) => {
  return (
    <div className="product-card">
      {/* بخش تصویر محصول */}
      <div className="product-card__image">
        <img src={imageUrl} alt={title || "product"} />
      </div>

      {/* بخش اطلاعات محصول */}
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>

        {/* قیمت محصول */}
        <div className="product-card__price">
          <span className="price-value">
            {price?.toLocaleString("en-US")}
          </span>
          <span className="price-currency"> T </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
