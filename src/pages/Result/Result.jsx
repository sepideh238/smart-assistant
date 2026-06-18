import "./Result.scss";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Result() {
  return (
    <div className="result-page">
      <div className="container"> {/* کانتینر برای ایجاد فاصله از طرفین */}
        <Breadcrumb />
        <PageHeader />

        <div className="product-list-section">
          <ProductList />
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
    </div>
  );
}
