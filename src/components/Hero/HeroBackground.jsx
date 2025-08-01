import { motion } from 'framer-motion';
import { useState } from 'react';

const HeroBackground = ({ mousePosition }) => {
  const [floatingElements] = useState({
    letters: ['A', 'B', 'C', 'D', 'Grammer', 'F', 'G', 'H'],
    symbols: ['?', '!', '.', ',', ';', ':', '"', "'"],
    icons: ['🎓', '📖', '✏️', '📝', '💡', '🌟', '🎯'],
    words: ['English', 'Grammar', 'Vocabulary', 'Speaking', 'Writing', 'Listening']
  });

  return (
    <div className="hero-3d-background">
      <div className="floating-educational-elements">
        {/* Floating Letters */}
        {floatingElements.letters.map((letter, i) => (
          <motion.div
            key={`letter-${i}`}
            className="floating-letter"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + Math.sin(i) * 15}%`,
              transform: `translateZ(${i * 5}px)`
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          >
            {letter}
          </motion.div>
        ))}

        {/* Other floating elements... */}
      </div>

      {/* Parallax Background Layers */}
      <motion.div
        className="parallax-layer layer-1"
        style={{
          transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
        }}
      />
      {/* Other layers... */}
    </div>
  );
};

export default HeroBackground;
