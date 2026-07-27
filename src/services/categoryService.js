// کتابخانه axios را برای ارسال درخواست‌های HTTP ایمپورت می‌کنیم
import axios from "axios";

// این تابع برای گرفتن لیست دسته‌بندی‌ها از API استفاده می‌شود
export const getCategories = () => {
  // یک درخواست GET به آدرس categories ارسال می‌شود
  // و نتیجه این درخواست return می‌شود
  return axios.get("http://localhost:3001/categories");
};
