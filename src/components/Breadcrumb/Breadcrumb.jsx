import "./Breadcrumb.scss";

export default function Breadcrumb() {
  return (
    <nav className="breadcrumb-container">
      <span className="breadcrumb-item">Home</span>
      <span className="breadcrumb-separator">&gt;</span>
      <span className="breadcrumb-item active">Search Results for 'tablet'</span>
    </nav>
  );
}
