import React from "react";
import "./CategoryCard.scss";

// این کامپوننت فقط یک کارت دسته‌بندی را نمایش می‌دهد
// اطلاعات کارت از props دریافت می‌شود
export default function CategoryCard({ imageUrl, title }) {
  return (
    <div className="category-card">
      {/* بخش نمایش تصویر دسته‌بندی */}
      <div className="category-card__image">
        {/*
          imageUrl آدرس تصویر را مشخص می‌کند
          title به عنوان alt استفاده شده تا اگر تصویر لود نشد
          یا برای دسترسی‌پذیری، متن جایگزین وجود داشته باشد
        */}
        <img src={imageUrl} alt={title} />
      </div>

      {/* بخش نمایش اطلاعات کارت */}
      <div className="category-card__info">
        {/* عنوان دسته‌بندی */}
        <h3 className="category-card__title">{title}</h3>
      </div>
    </div>
  );
}
