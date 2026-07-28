import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import CompareModal from "../CompareModal/CompareModal";

export default function ProductList({ products = [] }) {
  const navigate = useNavigate();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (product) => {
    const isAlreadySelected = selectedProducts.some(
      (item) => item.id === product.id
    );

    // اگر محصول از قبل انتخاب شده باشد، از لیست مقایسه حذف می‌شود
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

    // فقط تا 3 محصول اجازه انتخاب برای مقایسه داریم
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

  const handleGoToCompare = () => {
    // بستن مودال قبل از انتقال
    setIsCompareModalOpen(false);

    // ذخیره آیتم‌های انتخاب‌شده برای استفاده در صفحه Compare
    localStorage.setItem("compareItems", JSON.stringify(selectedProducts));

    // اعلام تغییر به کل اپلیکیشن
    window.dispatchEvent(new Event("compareUpdated"));

    // انتقال نرم به صفحه مقایسه
    navigate("/compare");
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {/* رندر محصولات دریافتی از Result.jsx */}
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
