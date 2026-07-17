import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Search from "./pages/Search/Search";
import Result from "./pages/Result/Result";
import Compare from "./pages/Compare/Compare";

export default function App() {
  return (
    <>
      {/* تعریف مسیرهای اصلی برنامه */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* صفحه جستجو / صفحه اصلی */}
          <Route index element={<Search />} />

          {/* صفحه نمایش نتایج */}
          <Route path="result" element={<Result />} />

          {/* صفحه مقایسه محصولات */}
          <Route path="compare" element={<Compare />} />
        </Route>
      </Routes>
    </>
  );
}
