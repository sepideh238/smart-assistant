import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Search from "./pages/Search/Search"; // <-- اصلاح شده
import Result from "./pages/Result";
import Compare from "./pages/Compare";

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

