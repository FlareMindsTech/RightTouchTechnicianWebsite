import useScrollReveal from "../hooks/useScrollReveal";
import techPartImg from "../assets/tech-part.png";
import "./About.css";

const About = () => {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.righttouchpartner.app&pcampaignid=web_share";
  useScrollReveal();

  return (
    <div className="container my-5 about-page">
      <div className="text-center mb-5 scroll-reveal reveal-up">
        <h1 className="display-4 fw-bold text-success">About Right Touch</h1>
        <p className="lead about-secondary-text about-p py-2 fw-bold">Connecting skilled professionals with homes that need a "Right Touch."</p>
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

      <div className="row align-items-center mb-5 scroll-reveal reveal-up reveal-delay-1">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="tech-part-showcase">
            <img src={techPartImg} alt="Right Touch Technician Partner" className="tech-part-img" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3 about-title">Why Join Our Platform?</h2>
          <p className="about-body-text mb-3">We provide trusted technicians with exclusive opportunities to grow their skills and earnings.</p>
          <ul className="list-unstyled">
            <li className="mb-3"><span className="text-success fw-bold">✓</span> <span className="about-body-text ms-2">Consistent bookings from verified customers</span></li>
            <li className="mb-3"><span className="text-success fw-bold">✓</span> <span className="about-body-text ms-2">Professional training and support</span></li>
            <li className="mb-3"><span className="text-success fw-bold">✓</span> <span className="about-body-text ms-2">Competitive earning potential</span></li>
            <li><span className="text-success fw-bold">✓</span> <span className="about-body-text ms-2">24/7 customer support</span></li>
          </ul>
        </div>
      </div>

      <hr className="my-5" />
      
      <div className="text-center mb-5 scroll-reveal reveal-up">
        <h2 className="fw-bold text-success">How We Ensure Quality</h2>
      </div>

      <div className="row text-center g-4 mb-5 scroll-stagger fw-bold">
        {["KYC Verification", "3-Day Training", "Live Bookings"].map((step, index) => (
          <div className="col-md-4 scroll-reveal reveal-up" key={index}>
            <div className="card quality-card h-100 border-0 shadow-sm p-4">
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