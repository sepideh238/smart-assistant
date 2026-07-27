import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

// این کامپوننت فقط کارت‌ها را رندر می‌کند
// نکته مهم: عمداً wrapper اضافه ندارد
// چون container اصلی grid در Search.jsx قرار دارد
export default function CategoryList({ categories = [] }) {
  return (
    <>
      {categories.map((item) => (
        <CategoryCard
          key={item.id} // کلید یکتا برای React
          imageUrl={item.imageUrl} // آدرس تصویر
          title={item.title} // عنوان کارت
        />
      ))}
    </>
  );
}
