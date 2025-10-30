'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete } : SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [logoFade, setLogoFade] = useState(true);

  // Add your logo paths here
  const logos = [
    '/GEM-logo.png',
    '/gem-logo-tan.png',
    '/GEM-logo.png'
    // Add more logo paths as needed
  ];

  useEffect(() => {
    // Cycle through logos
    if (currentLogoIndex < logos.length - 1) {
      const logoTimer = setTimeout(() => {
        setLogoFade(false);
        setTimeout(() => {
          setCurrentLogoIndex(prev => prev + 1);
          setLogoFade(true);
        }, 300); // Fade out duration
      }, 1000); // Time each logo is displayed

      return () => clearTimeout(logoTimer);
    } else {
      // After all logos, transition to main site
      const finalTimer = setTimeout(() => {
        handleComplete();
      }, 1000);

      return () => clearTimeout(finalTimer);
    }
  }, [currentLogoIndex]);

  const handleComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleComplete}
    >
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .pulse-animation {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
      <div
        className={`transition-opacity duration-300 pulse-animation ${
          logoFade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={logos[currentLogoIndex]}
          alt="Company Logo"
          className="hero-section-img"
        />
      </div>
    </div>
  );
}