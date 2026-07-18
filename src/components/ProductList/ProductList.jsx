import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import LimitModal from "../LimitModal/LimitModal";

// ایمپورت تصاویر محصولات
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

// حداکثر تعداد محصول قابل انتخاب برای مقایسه
const MAX_COMPARE_ITEMS = 3;

const products = [
  {
    id: 1,
    title: 'Apple iPad Pro 11"',
    price: 25000000,
    imageUrl: ipadPro11,
    storage: "128GB",
  },
  {
    id: 2,
    title: "Samsung Galaxy Tab S7",
    price: 18500000,
    imageUrl: galaxyTabS7,
    storage: "128GB",
  },
  {
    id: 3,
    title: "Xiaomi Pad 5",
    price: 18900000,
    imageUrl: xiaomiPad5,
    storage: "256GB",
  },
  {
    id: 4,
    title: "Huawei MatePad 11",
    price: 18000000,
    imageUrl: huaweiMatepad11,
    storage: "128GB",
  },
  {
    id: 5,
    title: "Lenovo Tab P11",
    price: 6500000,
    imageUrl: lenovoTabP11,
    storage: "64GB",
  },
  {
    id: 6,
    title: "Microsoft Surface Go 3",
    price: 15900000,
    imageUrl: surfaceGo3,
    storage: "128GB",
  },
  {
    id: 7,
    title: "Realme Pad",
    price: 8000000,
    imageUrl: realmePad,
    storage: "64GB",
  },
  {
    id: 8,
    title: "Amazon Fire HD 10",
    price: 7000000,
    imageUrl: fireHd10,
    storage: "32GB",
  },
  {
    id: 9,
    title: "Samsung Galaxy Tab A7",
    price: 6600000,
    imageUrl: galaxyTabA7,
    storage: "32GB",
  },
  {
    id: 10,
    title: "Teclast T40 Pro",
    price: 8300000,
    imageUrl: teclastT40Pro,
    storage: "128GB",
  },
  {
    id: 11,
    title: "Apple iPad Mini",
    price: 7800000,
    imageUrl: ipadMini,
    storage: "64GB",
  },
  {
    id: 12,
    title: "Huawei MediaPad T10",
    price: 8800000,
    imageUrl: mediapadT10,
    storage: "32GB",
  },
];

export default function ProductList() {
  const navigate = useNavigate();

  // لیست محصولاتی که برای مقایسه انتخاب شده‌اند
  const [compareItems, setCompareItems] = useState([]);

  // وضعیت باز و بسته بودن مودال محدودیت
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

  // هنگام لود شدن صفحه، آیتم‌های انتخاب‌شده از localStorage خوانده می‌شوند
  useEffect(() => {
    const savedCompareItems = localStorage.getItem("compareItems");

    if (savedCompareItems) {
      try {
        const parsedItems = JSON.parse(savedCompareItems);

        if (Array.isArray(parsedItems)) {
          setCompareItems(parsedItems);
        } else {
          setCompareItems([]);
        }
      } catch (error) {
        setCompareItems([]);
      }
    }
  }, []);

  // هر بار که compareItems تغییر کند، داخل localStorage ذخیره می‌شود
  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
    window.dispatchEvent(new Event("compareUpdated"));
  }, [compareItems]);

  const handleCompare = (product) => {
    setCompareItems((prevItems) => {
      const isAlreadySelected = prevItems.some((item) => item.id === product.id);

      // اگر محصول قبلاً انتخاب شده باشد، با کلیک دوباره از لیست حذف می‌شود
      if (isAlreadySelected) {
        return prevItems.filter((item) => item.id !== product.id);
      }

      // اگر تعداد انتخاب‌ها به سقف مجاز رسیده باشد مودال هشدار باز می‌شود
      if (prevItems.length >= MAX_COMPARE_ITEMS) {
        setIsLimitModalOpen(true);
        return prevItems;
      }

      // محصول جدید با همه فیلدها برای مقایسه ذخیره می‌شود
      return [...prevItems, product];
    });
  };

  const handleCloseLimitModal = () => {
    setIsLimitModalOpen(false);
  };

  const handleGoToCompareFromModal = () => {
    setIsLimitModalOpen(false);
    navigate("/compare");
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {products.map((product) => {
          const isSelected = compareItems.some((item) => item.id === product.id);

          return (
            <ProductCard
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              onCompare={handleCompare}
              isSelected={isSelected}
            />
          );
        })}
      </div>

      <LimitModal
        isOpen={isLimitModalOpen}
        onClose={handleCloseLimitModal}
        onGoToCompare={handleGoToCompareFromModal}
      />
    </div>
  );
}
