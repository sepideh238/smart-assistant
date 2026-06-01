import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          {/* ستون اول */}
          <div className="footer-col">
            <ul>
              <li><Link to="/">Customer Services</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Return Policy</Link></li>
            </ul>
          </div>

          {/* ستون دوم */}
          <div className="footer-col">
            <ul>
              <li><Link to="/">Quick Access</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>

          {/* ستون سوم: بخش پرداخت */}
          <div className="footer-col payment-col">
            <ul>
              <li><Link to="/">Payment Methods</Link></li>
            </ul>
            
            {/* همه ۴ آیکون داخل این div قرار می‌گیرند */}
            <div className="payment-icons">
              {/* ۱. قفل */}
              <div className="icon-box">
                <svg viewBox="0 0 100 60" className="payment-svg">
                  <path d="M41 26V20C41 15 45 11 50 11C55 11 59 15 59 20V26" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  <rect x="34" y="26" width="32" height="22" rx="4" fill="#ffffff" />
                  <circle cx="50" cy="35.5" r="3" fill="#ef4056" />
                  <rect x="48.7" y="38" width="2.6" height="6.5" rx="1.3" fill="#ef4056" />
                </svg>
              </div>

              {/* ۲. SSL */}
              <div className="icon-box">
                <svg viewBox="0 0 100 60" className="payment-svg">
                  <rect x="2" y="2" width="96" height="56" rx="6" fill="#ffffff" stroke="#eeeeee" strokeWidth="1" />
                  <text x="50%" y="50%" fontSize="22" fontWeight="600" letterSpacing="1" fill="#000000" fontFamily="Arial" textAnchor="middle" dominantBaseline="central">SSL</text>
                </svg>
              </div>

              {/* ۳. کارت تیره */}
              <div className="icon-box">
                <svg viewBox="0 0 100 60" className="payment-svg">
                  <rect x="2" y="2" width="96" height="56" rx="6" fill="#2f2f2f" />
                  <rect x="2" y="10" width="96" height="8" fill="#eaeaea" />
                </svg>
              </div>

              {/* ۴. کارت سفید با چیپ */}
              <div className="icon-box">
                <svg viewBox="0 0 100 60" className="payment-svg">
                  <rect x="0" y="0" width="100" height="60" rx="6" fill="#ffffff" />
                  <rect x="10" y="8" width="30" height="5" rx="2" fill="#ef4056" />
                  <rect x="10" y="16" width="20" height="5" rx="2" fill="#ef4056" />
                  <rect x="62" y="30" width="25" height="15" rx="3" fill="#d4af37" />
                  <rect x="62" y="36" width="25" height="3" fill="#b8962e" />
                  <rect x="68" y="30" width="2" height="15" fill="#b8962e" />
                </svg>
              </div>
            </div>
          </div>

          {/* ستون چهارم */}
          <div className="footer-col">
            <ul>
              <li><Link to="/">Follow Us</Link></li>
            </ul>
            <div className="follow-icons">
  {/* Facebook */}
  <svg viewBox="0 0 50 50" className="social-svg" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
    <circle cx="25" cy="25" r="22" className="social-bg" />
    <path
      className="social-fill"
      d="M28 15h-3c-2.2 0-4 1.8-4 4v4h-3v5h3v12h5V28h4l1-5h-5v-3c0-1 0.8-2 2-2h3v-5z"
    />
  </svg>

  {/* Twitter */}
  <svg viewBox="0 0 50 50" className="social-svg" xmlns="http://www.w3.org/2000/svg" aria-label="Twitter">
    <circle cx="25" cy="25" r="22" className="social-bg" />
    <path
      className="social-fill"
      d="M36 18.2c-.9.4-1.8.6-2.8.8 1-0.6 1.7-1.6 2-2.7-1 .6-2 .9-3.1 1.1-1-.9-2.3-1.4-3.6-1.4-2.8 0-5 2.2-5 5 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.3-.4.8-.6 1.7-.6 2.7 0 1.8.9 3.4 2.3 4.4-.8 0-1.6-.2-2.3-.7v.1c0 2.5 1.8 4.5 4.1 5-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.7 3.5-1.8 1.4-4.1 2.2-6.6 2.2H15c2.4 1.5 5.2 2.3 8.2 2.3 9.8 0 15.2-8.1 15.2-15.2v-.7c1-.7 1.8-1.6 2.6-2.6z"
    />
  </svg>

  {/* Instagram */}
  <svg viewBox="0 0 50 50" className="social-svg" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
    <circle cx="25" cy="25" r="22" className="social-bg" />
    <rect x="16" y="16" width="18" height="18" rx="5" className="social-stroke" />
    <circle cx="25" cy="25" r="4" className="social-fill" />
    <circle cx="32" cy="18" r="2" className="social-fill" />
  </svg>

  {/* LinkedIn */}
  <svg viewBox="0 0 50 50" className="social-svg" xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn">
    <circle cx="25" cy="25" r="22" className="social-bg" />
    <rect x="15" y="20" width="4" height="12" className="social-fill" />
    <circle cx="17" cy="16" r="2.2" className="social-fill" />
    <path
      className="social-fill"
      d="M23 20h4v2c.6-1 2.1-2.3 4.5-2.3 4.3 0 5.5 2.7 5.5 6.2v6.1h-4v-5.4c0-1.6-.1-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.6v5.5h-4V20z"
    />
  </svg>

  {/* YouTube */}
  <svg viewBox="0 0 50 50" className="social-svg" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube">
    <circle cx="25" cy="25" r="22" className="social-bg" />
    <path
      className="social-fill"
      d="M20 18h10c4 0 5 1 5 5v4c0 4-1 5-5 5H20c-4 0-5-1-5-5v-4c0-4 1-5 5-5z"
    />
    <polygon points="23,20.5 32,25 23,29.5" className="social-accent" />
  </svg>
</div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
