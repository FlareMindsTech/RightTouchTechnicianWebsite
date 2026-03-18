import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Help from "./pages/Help";
import HelpArticle from "./pages/HelpArticle";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import CurtainReveal from './components/CurtainReveal';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showCurtains, setShowCurtains] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  // When curtains are opened, hide them and show intro
  const handleCurtainOpen = () => {
    setShowCurtains(false);
    setShowIntro(true);
  };

  // When intro is complete, hide it to show main content
  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showCurtains) {
    return <CurtainReveal onCurtainOpened={handleCurtainOpen} />;
  }

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

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
