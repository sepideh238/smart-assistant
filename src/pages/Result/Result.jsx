import "./Result.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Result() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // دریافت محصولات از json-server و ذخیره در state
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="result-page container">
      <Breadcrumb />
      <PageHeader />

      <div className="product-list-section">
        {/* نمایش وضعیت لودینگ یا خطا قبل از رندر لیست محصولات */}
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductList products={products} />}
      </div>

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
