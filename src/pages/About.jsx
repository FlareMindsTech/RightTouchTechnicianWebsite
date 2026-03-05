import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

const About = () => {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.righttouch.app";
  useScrollReveal();

  return (
    <div className="container my-5 about-page">
      <div className="text-center mb-5 scroll-reveal reveal-up">
        <h1 className="display-4 fw-bold text-success">About Right Touch</h1>
        <p className="lead about-secondary-text">Connecting skilled professionals with homes that need a "Right Touch."</p>
      </div>

      <div className="row align-items-center mb-5 scroll-reveal reveal-up reveal-delay-1">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3 about-title">Who We Are</h2>
          <p className="about-body-text">Right Touch is a leading home service marketplace. We specialize in <strong>technician services</strong>, ensuring that your essential devices are always in top condition.</p>
          <p className="about-body-text">Our platform bridges the gap between expert technicians and customers, focusing on transparency and safety.</p>
        </div>
        <div className="col-md-6">
          <div className="p-4 rounded-4 border-start border-success border-5 about-vision-box">
            <h4 className="fw-bold about-title">Our Vision</h4>
            <p className="mb-0 about-body-text">To empower thousands of service professionals with consistent work and professional training.</p>
          </div>
        </div>
      </div>

      <hr className="my-5" />
      
      <div className="text-center mb-5 scroll-reveal reveal-up">
        <h2 className="fw-bold text-success">How We Ensure Quality</h2>
      </div>

      <div className="row text-center g-4 mb-5 scroll-stagger">
        {["KYC Verification", "3-Day Training", "Live Bookings"].map((step, index) => (
          <div className="col-md-4 scroll-reveal reveal-up" key={index}>
            <div className="card quality-card h-100 border-0 shadow-sm p-3">
              <div className="display-5 text-success mb-2">0{index + 1}</div>
              <h5 className="fw-bold about-title">{step}</h5>
              <p className="small about-secondary-text">Detailed process to ensure only the best technicians serve our customers.</p>
            </div>
          </div>
        ))}
      </div>

  {/* Play store */}
      <div className="p-5 rounded-5 text-center shadow-sm scroll-reveal reveal-up reveal-delay-1 about-cta-box">
        <h3 className="fw-bold mb-3 about-title">Ready to join our expert team?</h3>
        <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ height: "60px" }} />
        </a>
      </div>
    </div>
  );
};

export default About;