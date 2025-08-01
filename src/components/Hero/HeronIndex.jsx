import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import WhatsApp from '../WhatsApp';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import { features } from './constants';
import { educationalWords } from './constants.js';

const HeronIndex = () => {  
  const { i18n } = useTranslation();
  const [currentWord, setCurrentWord] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const displayWords = educationalWords[i18n.language] || educationalWords.en;

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % displayWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [displayWords.length]);

  // Stats reveal effect
  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate features
  const len = features.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [len]);

  return (
    <>
      <section id="home" className="hero-section-enhanced" ref={heroRef}>
        <HeroBackground mousePosition={mousePosition} />
        <div className="container">
          <div className="hero-layout-enhanced">
            <HeroContent 
              currentWord={currentWord}
              showStats={showStats}
              activeFeature={activeFeature}
              setActiveFeature={setActiveFeature}
              displayWords={displayWords}
            />
            <HeroVisual />
          </div>
        </div>
      </section>
      <WhatsApp />
    </>
  );
};

export default HeronIndex;
