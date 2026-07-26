import React from "react";
import "./CompareModal.scss";

export default function CompareModal({
  isOpen,
  onClose,
  productTitle = "Apple iPad Pro 11",
  onGoToCompare,
}) {
  return (
    // لایه خاکستری پشت مودال؛ با کلیک روی آن مودال بسته می‌شود
    <div
      className={`compare-modal-overlay ${isOpen ? "show" : ""}`}
      onClick={onClose}
    >
      {/* خود باکس مودال؛ stopPropagation نمی‌گذارد کلیک داخل مودال باعث بسته شدن شود */}
      <div
        className={`compare-modal ${isOpen ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* دکمه بستن مودال */}
        <button className="compare-modal__close" onClick={onClose}>
          ×
        </button>

        {/* آیکون موفقیت */}
        <div className="compare-modal__icon">
          <span>✓</span>
        </div>

        {/* عنوان اصلی مودال */}
        <h2 className="compare-modal__title">Added to compare!</h2>

        {/* متن توضیحی با نام محصول */}
        <p className="compare-modal__text">
          {productTitle} has been added to your compare list.
        </p>

        {/* بخش دکمه‌های پایین مودال */}
        <div className="compare-modal__actions">
          {/* بستن مودال و ادامه خرید */}
          <button
            className="compare-modal__btn compare-modal__btn--secondary"
            onClick={onClose}
          >
            Continue Shopping
          </button>

          {/* رفتن به صفحه مقایسه */}
          <button
            className="compare-modal__btn compare-modal__btn--primary"
            onClick={onGoToCompare}
          >
            Go to Compare
          </button>
        </div>
      </div>
    </div>
  );
}
