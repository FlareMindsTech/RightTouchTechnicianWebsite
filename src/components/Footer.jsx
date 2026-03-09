import { Link } from "react-router-dom";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  const handleUserAppClick = (event) => {
    event.preventDefault();

    if (window.toastr) {
      window.toastr.options = {
        closeButton: true,
        progressBar: true,
        timeOut: 4000,
        extendedTimeOut: 0,
        positionClass: "toast-top-center",
      };
      window.toastr.info("⚠ User App will launch soon");
    } else {
      window.alert("⚠ User App will launch soon");
    }
  };

  return (
    <footer className="pt-5 pb-4 mt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          {/* Column 1: Brand */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-success">Right Touch</h5>
            <p className="p fw-bold">Professional repair services at your doorstep.</p>
          </div>

          {/* Column 2: Roles */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase home-accent-text mb-4 font-weight-bold">Join Us</h5>
            <p><Link to="https://play.google.com/store/apps/details?id=com.righttouchpartner.app&pcampaignid=web_share" className="text-success fw-bold text-decoration-underline">Technician App</Link></p>
            <p><Link to="#" onClick={handleUserAppClick} className="text-success fw-bold text-decoration-underline">User App</Link></p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase home-accent-text mb-4 font-weight-bold">Contact</h5>
            <p className="home-accent-text"><i className="fas fa-home mr-3"></i> Chennai, TN 600001, IN</p>
            <p className="home-accent-text"><i className="fas fa-envelope mr-3"></i> support@righttouch.com</p>
          </div>

        </div>

        <hr className="mb-4" />

        {/* Copyright Section */}
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="small text-success mb-0">
              © {currentYear} <strong>Right Touch</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;