import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

// این کامپوننت لیست دسته‌بندی‌ها را از props دریافت می‌کند
// و برای هر دسته‌بندی یک کارت نمایش می‌دهد
export default function CategoryList({ categories = [] }) {
  return (
    <>
      {/* 
        با استفاده از map روی آرایه categories حرکت می‌کنیم
        و برای هر آیتم یک CategoryCard می‌سازیم
      */}
      {categories.map((item) => (
        <CategoryCard
          key={item.id} // کلید یکتا برای هر آیتم در React
          imageUrl={item.imageUrl} // آدرس تصویر دسته‌بندی
          title={item.title} // عنوان دسته‌بندی
        />
      ))}
    </>
  );
}
