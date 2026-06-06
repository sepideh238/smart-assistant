import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Search.scss";


export default function Search() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Search Page</h1>

      {/* تست خنثی SearchBox */}
<div style={{ maxWidth: "900px", margin: "16px auto" }}>
  <SearchBox />
</div>

{/* بخش اصلی نمایش محصولات با کلاس اختصاصی */}
<div className="search-results-grid">
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>



      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <Link to="/result">
          <button>Go To Result</button>
        </Link>

        <Link to="/compare">
          <button>Go To Compare</button>
        </Link>
      </div>
    </div>
  );
}