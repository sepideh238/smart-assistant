import React from "react";
import "./LimitModal.scss";

// این کامپوننت یک مودال هشدار است
// که وقتی کاربر بیشتر از 3 محصول انتخاب کند نمایش داده می‌شود
export default function LimitModal({ isOpen, onClose, onGoToCompare }) {
  // اگر مودال بسته باشد، چیزی نمایش نمی‌دهیم
  if (!isOpen) return null;

  return (
    // بک‌گراند تیره‌ی پشت مودال
    // کلیک روی این ناحیه مودال را می‌بندد
    <div className="limit-modal-overlay" onClick={onClose}>
      {/* 
        باکس اصلی مودال
        stopPropagation باعث می‌شود کلیک روی خود مودال
        به overlay نرسد و مودال ناخواسته بسته نشود
      */}
      <div
        className="limit-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* عنوان اصلی */}
        <h3 className="limit-modal__title">Maximum 3 products</h3>

        {/* متن توضیحی */}
        <p className="limit-modal__text">
          You can compare up to 3 products at the same time.
        </p>

        {/* دکمه‌های مودال */}
        <div className="limit-modal__actions">
          <button
            type="button"
            className="limit-modal__close"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="button"
            className="limit-modal__compare"
            onClick={onGoToCompare}
          >
            Go to Compare
          </button>
        </div>
      </div>
    </div>
  );
}
