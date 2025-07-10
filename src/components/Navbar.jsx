const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-bolt"></i>
          <span>PayBill</span>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#faq" className="nav-link">
            FAQs
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <button className="btn btn-primary">Pay Now</button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-links">
            <a href="#" className="mobile-menu-link active">
              Home
            </a>
            <a href="#features" className="mobile-menu-link">
              Features
            </a>
            <a href="#faq" className="mobile-menu-link">
              FAQs
            </a>
            <a href="#contact" className="mobile-menu-link">
              Contact
            </a>
            <button className="btn btn-primary ">Pay Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
