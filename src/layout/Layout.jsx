import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Layout.scss";

export default function Layout() {
  // گرفتن آدرس صفحه فعلی کاربر
  const location = useLocation();

  // صفحاتی که باید سرچ هدر در آنها نمایش داده شود
  const pagesWithSearch = ["/compare", "/result"];

  // بررسی اینکه آیا آدرس فعلی داخل لیست هست یا نه
  const showSearch = pagesWithSearch.includes(location.pathname);

  return (
    <div className="layout">
      {/* هدر سایت */}
      <Header showSearch={showSearch} />

      {/* محتوای صفحات */}
      <main className="layout__main">
        <Outlet />
      </main>

      {/* فوتر سایت */}
      <Footer />

      {/* کانتینر سراسری toast با انیمیشن اسلاید و استایل اختصاصی */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        transition={Slide}
        toastClassName="custom-toast-container"
      />
    </div>
  );
}
