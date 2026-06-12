import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

// ایمپورت تصاویر
import beautyImg from "../../assets/categories/beauty.png";
import fashionImg from "../../assets/categories/fashion.png";
import gamingImg from "../../assets/categories/gaming.png";
import homeApplianceImg from "../../assets/categories/home_appliance.png";
import laptopImg from "../../assets/categories/laptop.png";
import mobileImg from "../../assets/categories/mobile.png";
import sportsImg from "../../assets/categories/sports.png";
import toysImg from "../../assets/categories/toys.png";

export default function CategoryList() {
  const categories = [
    // قیمت‌ها از اینجا حذف شدند
    { id: 1, imageUrl: mobileImg, title: "Mobile Phones" },
    { id: 2, imageUrl: laptopImg, title: "Laptops" },
    { id: 3, imageUrl: homeApplianceImg, title: "Home Appliances" },
    { id: 4, imageUrl: fashionImg, title: "Fashion" },
    { id: 5, imageUrl: beautyImg, title: "Beauty & Health" },
    { id: 6, imageUrl: sportsImg, title: "Sports & Outdoors" },
    { id: 7, imageUrl: gamingImg, title: "Gaming" },
    { id: 8, imageUrl: toysImg, title: "Toys & Kids" },
  ];

  return (
    <> 
      {/* 
         استفاده از Fragment (<>) به جای <div>:
         این کار باعث می‌شود کارت‌ها مستقیماً زیرمجموعه گرید صفحه Search قرار بگیرند
         تا بتوانیم آن‌ها را 4 تایی کنار هم بچینیم.
      */}
      {categories.map((item) => (
        <CategoryCard
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          // price دیگر پاس داده نمی‌شود
        />
      ))}
    </>
  );
}
