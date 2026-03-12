import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Help from "./pages/Help";
import HelpArticle from "./pages/HelpArticle";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/:id" element={<HelpArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
