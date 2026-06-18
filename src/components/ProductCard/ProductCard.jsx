import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product, imageUrl, title, price }) => {
  const image = product?.image || imageUrl;
  const productTitle = product?.title || title;
  const productPrice = product?.price || price;

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
      </div>
    </div>
  );
};

export default ProductCard;
