import { useParams, Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const HelpArticle = () => {
  const { id } = useParams();
  useScrollReveal();

  const content = {
    'getting-started': {
      title: 'Getting started with Right Touch',
      sections: [
        { subtitle: 'What is Right Touch?', text: 'Right Touch is a comprehensive technical support bridge connecting customers with specialized technicians for any technical task, from repairs to complex installations.' },
        { subtitle: 'Booking Process', list: [
          'Choose your technical requirement category.',
          'Set your preferred time and address.',
          'Wait for a verified Professional to be assigned.',
          'Technician will reach you exactly 1 hour before the slot.'
        ]}
      ]
    },
    'services': {
        title: 'Full Technical Support Range',
        sections: [
            { subtitle: 'Comprehensive Solutions', text: 'We provide support for every technical challenge. If a job requires a technician, we have the expert to solve it.' }
        ]
    },
    'policy': {
      title: 'Cancellation & Refund Policy',
      sections: [
        { 
          subtitle: 'How to cancel?', 
          text: 'Our automated cancellation system is currently under construction. Since the "Cancel" button is not yet available in the app, please contact our support team directly to manage your bookings.' 
        }
      ]
    }
  };

  const article = content[id] || content['getting-started'];

  return (
    <div className="container py-5 min-vh-100 help-article">
      <Link className="btn text-success p-0 mb-4 scroll-reveal reveal-left" to="/help">
        <i className="bi bi-arrow-left fs-3"></i>
      </Link>
      
      <div className="scroll-reveal reveal-up">
        <h1 className="fw-bold display-5 mb-5">{article.title}</h1>
        {article.sections.map((sec, i) => (
          <div key={i} className="mb-5">
            <h4 className="fw-bold text-success mb-3">{sec.subtitle}</h4>
            {sec.text && <p className="text-secondary lh-lg fs-5">{sec.text}</p>}
            {sec.list && (
              <ul className="list-group border-0">
                {sec.list.map((item, index) => (
                  <li key={index} className="list-group-item border-0 fs-5 ps-0">
                    <span className="text-success me-2">✓</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpArticle;