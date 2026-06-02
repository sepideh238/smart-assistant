import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/digikala.png';
// import SearchBox from '../SearchBox/SearchBox';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={logo} alt="digikala logo" />
          </Link>
        </div>

        {/*
        <div className="search-wrapper">
          <SearchBox />
        </div>
        */}

        <div className="header-right">
          <ul className="header-actions">
            {/* پروفایل */}
            <li className="action-item profile-item" title="User Profile">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4.2" />
                <path d="M4.5 19.2c1.7-3.3 4.5-5 7.5-5s5.8 1.7 7.5 5" />
              </svg>
            </li>

            {/* علاقه‌مندی */}
            <li className="action-item" title="Wish List">
              <svg
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

            {/* سبد خرید */}
            <li className="action-item" title="Shopping Cart">
              <svg
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
          </ul>
        </div>
      </div>
    </header>
  );
}
