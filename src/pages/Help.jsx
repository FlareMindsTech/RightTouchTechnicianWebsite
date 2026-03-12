import useScrollReveal from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
import "./Help.css";

const Help = () => {
  useScrollReveal();

  // Professional Technical Support
  const knowledgeHub = [
    { id: 'foundation', title: 'Foundation & Onboarding', icon: 'bi-send-check' },
    { id: 'spectrum', title: 'The Technical Spectrum', icon: 'bi-tools' },
    { id: 'lifecycle', title: 'Service Request Lifecycle', icon: 'bi-calendar-range' },
    { id: 'protocol', title: 'The Trust Protocol', icon: 'bi-shield-shaded' },
    { id: 'guidelines', title: 'Operational Guidelines', icon: 'bi-journal-text' },
  ];

  return (
    <div className="help-page bg-light min-vh-100 py-5">
      <div className="container">
        {/* Back Button - Fixed to go back to Home */}
        <div className="mb-4 scroll-reveal reveal-left">
          <Link className="btn border-0 p-0 text-success" to="/">
            <i className="bi bi-arrow-left fs-1"></i> 
          </Link>
        </div>

        <h1 className="text-center fw-bold mb-5 scroll-reveal reveal-up">
          Right Touch Knowledge Hub
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 scroll-reveal reveal-up reveal-delay-1">
            <div className="help-card shadow-sm border-0 bg-white rounded-4 overflow-hidden">
              {/* Unique Heading Name */}
              <div className="p-4 border-bottom bg-white">
                <h5 className="fw-bold mb-0 text-success">Expert Resources</h5>
              </div>
              
              <div className="list-group list-group-flush">
                {knowledgeHub.map((topic) => (
                  <Link 
                    to={`/help/${topic.id}`}
                    key={topic.id}
                    className="list-group-item list-group-item-action d-flex align-items-center justify-content-between py-3 px-4"
                  >
                    <div className="d-flex align-items-center">
                      <i className={`bi ${topic.icon} me-3 fs-5 text-success`}></i>
                      <span className="fw-semibold text-dark">{topic.title}</span>
                    </div>
                    <i className="bi bi-chevron-right text-muted fs-5"></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;