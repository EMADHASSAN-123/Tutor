import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showLetters, setShowLetters] = useState([]);
  const word = "LOADING"; // You can change this to any word you want

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (word.length + 2); // +2 for pause between cycles
        
        if (nextIndex === 0) {
          // Reset animation - clear all letters
          setShowLetters([]);
        } else if (nextIndex <= word.length) {
          // Add next letter
          setShowLetters(prev => [...prev, nextIndex - 1]);
        }
        
        return nextIndex;
      });
    }, 300); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [isLoading, word.length]);

  useEffect(() => {
    // Simulate app loading time (remove this in production)
    const loadingTimer = setTimeout(() => {
      onLoadingComplete();
    }, 5000); // 5 seconds for demo

    return () => clearTimeout(loadingTimer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="glass-overlay">
        <div className="loading-content">
          <div className="animated-text">
            {word.split('').map((letter, index) => (
              <span
                key={index}
                className={`letter ${showLetters.includes(index) ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
