const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <i className="fas fa-bolt"></i>
              <span>PayBill</span>
            </div>
            <p className="footer-about">
              The most trusted bill payment platform in Africa. Pay all your
              utility bills instantly and securely.
            </p>
            <div className="footer-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="#">Home</a>
              </li>
              <li className="footer-link">
                <a href="#">Features</a>
              </li>
              <li className="footer-link">
                <a href="#">Pricing</a>
              </li>
              <li className="footer-link">
                <a href="#">About Us</a>
              </li>
              <li className="footer-link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                support@paybill.com
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-phone"></i>
                +234 xxxxxxxx
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                Lagos, Nigeria
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-text">
              Get updates on new features and bill payment tips
            </p>
            <form className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 PayBill. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
