import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/digikala.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">

        {/* لوگو (سمت چپ طبق کد شما) */}
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={logo} alt="digikala logo" />
          </Link>
        </div>

        {/* بخش جستجو (مرکز) */}
        <div className="search-wrapper">
          <form className="search-form" role="search">
            {/* آیکن داخل اینپوت */}
            <span className="search-icon-inside">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            {/* اینپوت */}
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
            />

            {/* دکمه سرچ */}
            <button type="submit" className="search-button">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>

          {/* پاپ‌آپ پیشنهادات - فعلاً استاتیک */}
          <div className="search-suggestions">
            <div className="suggestion-header">Suggested Searches</div>
            <ul className="suggestion-list">
            <li>Wireless Headphones</li>
              <li>Smartphones</li>
              <li>Laptop</li>
              <li>Running Shoes</li>
              <li>Smart Watch</li>
            </ul>
          </div>
        </div>
         
        {/* آیکن‌ها (سمت راست طبق کد شما) */}
        <div className="header-right">
          <ul className="header-actions">
            <li className="action-item" title="Wish List">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 8.6c0 5.4-8.8 11.4-8.8 11.4S3.2 14 3.2 8.6A4.8 4.8 0 0 1 8 3.8c1.6 0 3.1.8 4 2.1a5 5 0 0 1 4-2.1 4.8 4.8 0 0 1 4.8 4.8z" />
              </svg>
            </li>

            <li className="action-item" title="Shopping Cart">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="17" cy="20" r="1" />
                <path d="M3 4h2l2.4 12.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L21 8H6" />
              </svg>
            </li>

            <li className="action-item" title="User Profile">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="8" r="4" />
              </svg>
            </li>
          </ul>
        </div>

      </div>
    </header>
  );
}
