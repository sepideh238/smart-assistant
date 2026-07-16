import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";

import ipadPro11 from "../../assets/products/tablets/ipad-pro-11.png";
import galaxyTabS7 from "../../assets/products/tablets/galaxy-tab-s7.png";
import xiaomiPad5 from "../../assets/products/tablets/xiaomi-pad-5.png";
import huaweiMatepad11 from "../../assets/products/tablets/huawei-matepad-11.png";
import lenovoTabP11 from "../../assets/products/tablets/lenovo-tab-p11.png";
import surfaceGo3 from "../../assets/products/tablets/surface-go-3.png";
import realmePad from "../../assets/products/tablets/realme-pad.png";
import fireHd10 from "../../assets/products/tablets/fire-hd-10.png";
import galaxyTabA7 from "../../assets/products/tablets/galaxy-tab-a7.png";
import teclastT40Pro from "../../assets/products/tablets/teclast-t40-pro.png";
import ipadMini from "../../assets/products/tablets/ipad-mini.png";
import mediapadT10 from "../../assets/products/tablets/mediapad-t10.png";

const products = [
  { id: 1, title: 'Apple iPad Pro 11"', price: 25000000, imageUrl: ipadPro11 },
  { id: 2, title: "Samsung Galaxy Tab S7", price: 18500000, imageUrl: galaxyTabS7 },
  { id: 3, title: "Xiaomi Pad 5", price: 18900000, imageUrl: xiaomiPad5 },
  { id: 4, title: "Huawei MatePad 11", price: 18000000, imageUrl: huaweiMatepad11 },
  { id: 5, title: "Lenovo Tab P11", price: 6500000, imageUrl: lenovoTabP11 },
  { id: 6, title: "Microsoft Surface Go 3", price: 15900000, imageUrl: surfaceGo3 },
  { id: 7, title: "Realme Pad", price: 8000000, imageUrl: realmePad },
  { id: 8, title: "Amazon Fire HD 10", price: 7000000, imageUrl: fireHd10 },
  { id: 9, title: "Samsung Galaxy Tab A7", price: 6600000, imageUrl: galaxyTabA7 },
  { id: 10, title: "Teclast T40 Pro", price: 8300000, imageUrl: teclastT40Pro },
  { id: 11, title: "Apple iPad Mini", price: 7800000, imageUrl: ipadMini },
  { id: 12, title: "Huawei MediaPad T10", price: 8800000, imageUrl: mediapadT10 }
];

export default function ProductList() {
  // این state لیست محصولاتی را نگه می‌دارد که برای مقایسه انتخاب شده‌اند
  const [compareItems, setCompareItems] = useState([]);

  // وقتی کامپوننت برای اولین بار باز شد، اگر قبلاً چیزی در localStorage بود بخوان
  useEffect(() => {
    const savedCompareItems = localStorage.getItem("compareItems");

    if (savedCompareItems) {
      setCompareItems(JSON.parse(savedCompareItems));
    }
  }, []);

  // هر بار compareItems تغییر کرد، آن را در localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

  // این تابع وقتی از ProductCard صدا زده شود، محصول را اضافه/حذف می‌کند
  const handleCompare = (product) => {
    setCompareItems((prevItems) => {
      // بررسی می‌کنیم آیا این محصول قبلاً انتخاب شده یا نه
      const isAlreadySelected = prevItems.some((item) => item.id === product.id);

      // اگر قبلاً انتخاب شده بود، با کلیک دوباره حذفش می‌کنیم
      if (isAlreadySelected) {
        return prevItems.filter((item) => item.id !== product.id);
      }

      // اگر 3 محصول قبلاً انتخاب شده بود، دیگر بیشتر اضافه نمی‌کنیم
      if (prevItems.length >= 3) {
        alert("You can compare up to 3 products only.");
        return prevItems;
      }

      // اگر نه تکراری بود و نه لیست پر بود، محصول جدید را اضافه کن
      return [...prevItems, product];
    });
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        // بررسی می‌کنیم آیا این کارت باید دکمه غیرفعال داشته باشد یا نه
        const isSelected = compareItems.some((item) => item.id === product.id);
        const shouldDisable = compareItems.length >= 3 && !isSelected;

        return (
          <ProductCard
            key={product.id}
            product={product}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            onCompare={handleCompare}
            isCompareDisabled={shouldDisable}
          />
        );
      })}
    </div>
  );
}
