import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Search from "./pages/Search/Search";
import Result from "./pages/Result/Result";   // <-- اصلاح شد: اضافه کردن /Result
import Compare from "./pages/Compare/Compare"; // <-- اصلاح شد: اضافه کردن /Compare

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />
        <Route path="result" element={<Result />} />
        <Route path="compare" element={<Compare />} />
      </Route>
    </Routes>
  );
}
