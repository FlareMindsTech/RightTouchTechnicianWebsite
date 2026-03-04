import { Link } from "react-router-dom";
import RightSide from "../assets/right-side.png";
import "./Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.righttouch.app";
  useScrollReveal();

  return (
    <div className="container mt-5 overflow-hidden">
      <div className="row align-items-center">
        {/* Left content Container */}
        <div className="col-md-6 scroll-reveal reveal-left">
          <h1 className="display-4 fw-bold mb-4">
            Earn More. Earn Respect. <br />
            <span className="text-success">Safety Ensured.</span>
          </h1>
          <p className="lead text-secondary fw-bold mb-4">
            Right Touch is a digital gateway designed to elevate skilled specialists 
            by providing the tools and platform needed to build a thriving independent career.
          </p>
          <Link to={playStoreLink} target="_blank" rel="noopener noreferrer" className="btn shadow-custom btn-dark btn-lg px-4 shadow">
            Get the Technician App
          </Link>
        </div>
        {/* Right side container */}
        <div className="col-md-6 text-center mt-5 mt-md-0 scroll-reveal reveal-right reveal-delay-1">
          <img src={RightSide} alt="Service Professionals" className="img-fluid hero-img" style={{ maxHeight: "500px" }} />
        </div>
      </div>

        {/* Bottom content */}
      <div className="text-center mt-5 pt-5 pb-5 scroll-reveal reveal-up reveal-delay-2">
        <h1 className="fw-bold">Join Right Touch to enhance your one time life</h1>
        <p className="text-muted mb-4">Empowering the hands that fix your home. Right Touch: Where professional skill meets premium opportunity.</p>
        <Link to={playStoreLink} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg px-5 py-3 fw-bold shadow-lg rounded-pill">
          Register as a Technician Now
        </Link>
      </div>
    </div>
  );
};

export default Home;