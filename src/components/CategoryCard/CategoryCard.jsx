import React from "react";
import "./CategoryCard.scss";

export default function CategoryCard({ imageUrl, title, price }) {
  return (
    <div className="category-card">

      <div className="category-card__image">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="category-card__info">

        <h3 className="category-card__title">
          {title}
        </h3>

      </div>

    </div>
  );
}
