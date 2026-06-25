import "./Compare.scss";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";

import ipadPro11 from "../../assets/products/tablets/ipad-pro-11.png";
import galaxyTabS7 from "../../assets/products/tablets/galaxy-tab-s7.png";
import xiaomiPad5 from "../../assets/products/tablets/xiaomi-pad-5.png";

export default function Compare() {
  const selectedProducts = [
    {
      id: 1,
      title: "Apple iPad Pro 11",
      price: 24500000,
      image: ipadPro11,
      brand: "Apple",
      display: "11-inch",
      screenSize: "11",
      storage: "128GB",
      ram: "8GB",
      connectivity: "Wi-Fi/LTE",
    },
    {
      id: 2,
      title: "Samsung Galaxy Tab S7",
      price: 18200000,
      image: galaxyTabS7,
      brand: "Samsung",
      display: "11-inch",
      screenSize: "11",
      storage: "128GB",
      ram: "8GB",
      connectivity: "Wi-Fi only",
    },
    {
      id: 3,
      title: "Xiaomi Pad 5",
      price: 18800000,
      image: xiaomiPad5,
      brand: "Xiaomi",
      display: "11 inch",
      screenSize: "11",
      storage: "256GB",
      ram: "8GB",
      connectivity: "Wi-Fi",
    },
  ];

  const specs = [
    { key: "display", label: "Price" },
    { key: "screenSize", label: "Screen Size" },
    { key: "storage", label: "Storage" },
    { key: "ram", label: "RAM" },
    { key: "connectivity", label: "Connectivity" },
  ];

  return (
    <div className="compare-page container">
      <Breadcrumb />
      <PageHeader />

      <section className="compare-section">
        <h2 className="compare-section__title">Product</h2>

        <div className="compare-products">
          {selectedProducts.map((product) => (
            <div className="compare-product-column" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* فقط این div را اضافه کن */}
<div className="table-scroll-wrapper"> 
  <div className="compare-specs">
    {specs.map((spec) => (
      <div className="compare-row" key={spec.key}>
        <div className="compare-spec-title">{spec.label}</div>
        {selectedProducts.map((product) => (
          <div className="compare-spec-value" key={product.id}>
            {product[spec.key] || "-"}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
{/* پایان div جدید */}

        <button className="btn-compare-now" type="button">
          Compare Now
        </button>
      </section>

      <div className="search-navigation">
        <Link to="/">
          <button className="btn-nav" type="button">
            Go To Search
          </button>
        </Link>
        <Link to="/compare">
          <button className="btn-nav btn-nav--secondary" type="button">
            Go To Compare
          </button>
        </Link>
      </div>
    </div>
  );
}