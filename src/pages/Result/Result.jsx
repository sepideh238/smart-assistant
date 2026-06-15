import "./Result.scss";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

/*
  Result Page
  این صفحه نتایج جستجو را نمایش می‌دهد.
*/

export default function Result() {
  return (
    <div className="result-page">
      
      <h1 className="result-title">Tablet Results</h1>

      {/* کانتینر لیست محصولات */}
      <div className="product-list-container">
        <ProductList />
      </div>

      {/* کانتینر دکمه‌های ناوبری - برای وسط‌چین شدن */}
      <div className="search-navigation">
        <Link to="/">
          <button className="btn-nav">Go To Search</button>
        </Link>
        <Link to="/compare">
          <button className="btn-nav btn-nav--secondary">Go To Compare</button>
        </Link>
      </div>

    </div>
  );
}
