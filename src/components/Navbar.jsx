import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/RightTouchLogo.ico"
            alt="Right Touch Logo" 
            className="d-inline-block nav-logo align-top me-2"
          />
        </Link>

        {/* Toggle Button (X when open) */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={handleNavCollapse} 
        >
          {isNavCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="btn-close"></span> 
          )}
        </button>

        {/* Links Container */}
        <div className={`${isNavCollapsed ? 'collapse' : 'show'} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* About */}
            <li className="nav-item px-lg-3">
              <Link 
                className="nav-link text-success about fw-bold" 
                to="/about"
                onClick={() => setIsNavCollapsed(true)} 
              >
                About
              </Link>
            </li>
            {/* Book a Service  */}
            <li className="nav-item px-lg-3">
              <Link 
                className="nav-link text-secondary fw-bold" 
                to="/"
                onClick={() => setIsNavCollapsed(true)} 
              >
                Book a service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;