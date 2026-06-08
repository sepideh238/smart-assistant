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
    { id: 1, imageUrl: mobileImg, title: "Mobile Phones", price: "6,800,000" },
    { id: 2, imageUrl: laptopImg, title: "Laptops", price: "8,300,000" },
    { id: 3, imageUrl: homeApplianceImg, title: "Home Appliances", price: "7,800,000" },
    { id: 4, imageUrl: fashionImg, title: "Fashion", price: "3,800,000" },
    { id: 5, imageUrl: beautyImg, title: "Beauty & Health", price: "1,500,000" },
    { id: 6, imageUrl: sportsImg, title: "Sports & Outdoors", price: "2,100,000" },
    { id: 7, imageUrl: gamingImg, title: "Gaming", price: "950,000" },
    { id: 8, imageUrl: toysImg, title: "Toys & Kids", price: "1,700,000" },
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
          price={item.price}
        />
      ))}
    </>
  );
}
