import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ۱. اضافه شدن ابزار جابجایی بین صفحات
import { toast } from "react-toastify";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import CompareModal from "../CompareModal/CompareModal";

// ... (بخش وارد کردن تصاویر بدون تغییر باقی می‌ماند)
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
  { id: 1, title: 'Apple iPad Pro 11"', price: 25000000, imageUrl: ipadPro11, storage: "128GB" },
  { id: 2, title: "Samsung Galaxy Tab S7", price: 18500000, imageUrl: galaxyTabS7, storage: "128GB" },
  { id: 3, title: "Xiaomi Pad 5", price: 18900000, imageUrl: xiaomiPad5, storage: "256GB" },
  { id: 4, title: "Huawei MatePad 11", price: 18000000, imageUrl: huaweiMatepad11, storage: "128GB" },
  { id: 5, title: "Lenovo Tab P11", price: 6500000, imageUrl: lenovoTabP11, storage: "64GB" },
  { id: 6, title: "Microsoft Surface Go 3", price: 15900000, imageUrl: surfaceGo3, storage: "128GB" },
  { id: 7, title: "Realme Pad", price: 8000000, imageUrl: realmePad, storage: "64GB" },
  { id: 8, title: "Amazon Fire HD 10", price: 7000000, imageUrl: fireHd10, storage: "32GB" },
  { id: 9, title: "Samsung Galaxy Tab A7", price: 6600000, imageUrl: galaxyTabA7, storage: "32GB" },
  { id: 10, title: "Teclast T40 Pro", price: 8300000, imageUrl: teclastT40Pro, storage: "128GB" },
  { id: 11, title: "Apple iPad Mini", price: 7800000, imageUrl: ipadMini, storage: "64GB" },
  { id: 12, title: "Huawei MediaPad T10", price: 8800000, imageUrl: mediapadT10, storage: "32GB" },
];

export default function ProductList() {
  // ۲. تعریف تابع جابجایی (Navigate)
  const navigate = useNavigate();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (product) => {
    const isAlreadySelected = selectedProducts.some((item) => item.id === product.id);

    if (isAlreadySelected) {
      setSelectedProducts((prev) => prev.filter((item) => item.id !== product.id));
      toast.info(
        <div className="custom-toast">
          <div className="custom-toast__icon">🗑️</div>
          <div className="custom-toast__content">
            <span className="custom-toast__title">{product.title}</span>
            <span className="custom-toast__subtitle">Removed from compare list</span>
          </div>
        </div>,
        { icon: false, autoClose: 3000 }
      );
      return;
    }

    if (selectedProducts.length >= 3) {
      setIsCompareModalOpen(true);
      return;
    }

    setSelectedProducts((prev) => [...prev, product]);
    toast.success(
      <div className="custom-toast">
        <div className="custom-toast__icon">✅</div>
        <div className="custom-toast__content">
          <span className="custom-toast__title">{product.title}</span>
          <span className="custom-toast__subtitle">Added to compare list</span>
        </div>
      </div>,
      { icon: false, autoClose: 3000 }
    );
  };

  const handleCloseModal = () => {
    setIsCompareModalOpen(false);
  };

  // ۳. تابع اصلاح شده برای انتقال بدون مکث و پرش
  const handleGoToCompare = () => {
    // بستن مودال (اختیاری، چون صفحه عوض می‌شود)
    setIsCompareModalOpen(false);
    
    // ذخیره محصولات انتخاب شده در LocalStorage برای استفاده در صفحه مقصد
    localStorage.setItem("compareItems", JSON.stringify(selectedProducts));
    
    // اطلاع‌رسانی به کل برنامه برای به‌روزرسانی (Event Listener)
    window.dispatchEvent(new Event("compareUpdated"));
    
    // استفاده از هوک useNavigate برای جابجایی آنی و نرم (بسیار سریع‌تر از location.assign)
    navigate("/compare");
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            isSelected={selectedProducts.some((item) => item.id === product.id)}
            onToggleCompare={handleToggleCompare}
          />
        ))}
      </div>

      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={handleCloseModal}
        productTitle="You can compare up to 3 products only"
        onGoToCompare={handleGoToCompare}
      />
    </div>
  );
}
