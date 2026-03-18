import React, { useState, useEffect } from 'react';
import './IntroScreen.css';
import logo from '../assets/logo.png'; 

const IntroScreen = ({ onComplete }) => {
  const [stage, setStage] = useState('blackout');
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // 1. Blackout for 0.5s, then Light On
    const lightTimer = setTimeout(() => {
      setStage('lightOn');
    }, 500);

    // 2. Content appears after light is on for 1.2s
    const contentTimer = setTimeout(() => {
      setStage('content');
    }, 1700);

    // 3. Move to success stage after 7s total
    const successTimer = setTimeout(() => {
      setStage('success');
    }, 7500);

    // 4. Complete after success shows for 2.5s
    const completeTimer = setTimeout(() => {
      setStage('exit');
      setTimeout(onComplete, 800);
    }, 10500);

    return () => {
      clearTimeout(lightTimer);
      clearTimeout(contentTimer);
      clearTimeout(successTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Generate electric sparks
  useEffect(() => {
    if (stage === 'content' || stage === 'success') {
      const generateSparks = () => {
        const newSparks = Array.from({ length: 15 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 1.5 + Math.random() * 2,
          size: 2 + Math.random() * 3
        }));
        setSparks(newSparks);
      };

      generateSparks();
      const interval = setInterval(generateSparks, 4000);
      return () => clearInterval(interval);
    }
  }, [stage]);


  return (
    <div className={`intro-screen stage-${stage}`}>
      {/* Absolute Black Layer for initial reveal */}
      <div className="blackout-overlay"></div>

      {/* Background Glow */}
      <div className="yellow-light-bg"></div>

      {/* Electric Spark Background */}
      <div className="sparks-container">
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="spark-animate"
            style={{
              left: `${spark.left}%`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              animationDelay: `${spark.delay}s`,
              animationDuration: `${spark.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="intro-wrapper">
        {(stage === 'content') && (
          <div className="intro-content glass-morphism animate-fade-up">
            {/* Logo with glow effect */}
            <div className="intro-logo-container">
              <div className="logo-glow"></div>
              <img src={logo} alt="Right Touch Logo" className="intro-logo" />
            </div>

            {/* Website Name */}
            <h1 className="intro-title">Right Touch</h1>

            {/* Subtitle */}
            <p className="intro-subtitle">Professional Repair Services</p>

            <p className="intro-tagline">Excellence at Your Doorstep</p>

            <div className="loading-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}

        {(stage === 'success') && (
          <div className="success-content glass-morphism animate-pop">
            <div className="success-icon">💡</div>
            <h2 className="success-title">Welcome</h2>
            <p className="success-message">Preparing your premium experience...</p>

            <div className="loading-bar-container">
              <div className="loading-bar-fill"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;