import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsApp from './WhatsApp';
const Hero = () => {  
  const { t, i18n } = useTranslation();
  const [currentWord, setCurrentWord] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Enhanced educational words animation
  const educationalWords = {
    en: ['Fluency', 'Confidence', 'Success', 'Excellence', 'Mastery'],
    ar: ['الطلاقة', 'الثقة', 'النجاح', 'التميز', 'الإتقان']
  };

  const displayWords = educationalWords[i18n.language] || educationalWords.en;

  // Enhanced features with better educational content
  const features = [
    {
      icon: '🎯',
      title: t('hero.feature1', 'Personalized Learning'),
      description: t('hero.feature1.desc', 'AI-powered curriculum adapted to your learning style'),
      color: '#3B82F6'
    },
    {
      icon: '🌟',
      title: t('hero.feature2', 'Expert Guidance'),
      description: t('hero.feature2.desc', 'Learn from certified native speakers'),
      color: '#10B981'
    },
    
  ];

  // Enhanced educational statistics
  const stats = [
    { number: '400+', label: t('hero.stat1', 'Happy Students'), icon: '👨‍🎓' },
    { number: '98%', label: t('hero.stat2', 'Success Rate'), icon: '📊' },
    { number: '7+', label: t('hero.stat3', 'Years Experience'), icon: '⏱️' },
  ];

  // Educational quotes rotation
  const educationalQuotes = {
    en: [
      "Learn a language, open a world of opportunities",
      "Fluency is a journey, not a destination",
      "Every mistake is a step towards mastery",
      "Practice makes progress, not perfection"
    ],
    ar: [
      "تعلم لغة، افتح عالماً من الفرص",
      "الطلاقة رحلة وليست وجهة",
      "كل خطأ خطوة نحو الإتقان",
      "الممارسة تحقق التقدم وليس الكمال"
    ]
  };

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
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <>
    <section id="home" className="hero-section-enhanced" ref={heroRef}>
      {/* Enhanced 3D Educational Background */}
      <div className="hero-3d-background">
        {/* Floating Educational Elements */}
        <div className="floating-educational-elements">
          {/* Books */}
        

          {/* Floating Letters */}
          {['A', 'B', 'C', 'D', 'G', 'F', 'G', 'H'].map((letter, i) => (
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

          {/* Grammar Symbols */}
          {['?', '!', '.', ',', ';', ':', '"', "'"].map((symbol, i) => (
            <motion.div
              key={`symbol-${i}`}
              className="floating-symbol"
              style={{
                right: `${10 + i * 8}%`,
                top: `${25 + (i % 4) * 20}%`,
                transform: `translateZ(${i * 3}px)`
              }}
              animate={{
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 7 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            >
              {symbol}
            </motion.div>
          ))}

          {/* Educational Icons */}
          {['🎓', '📖', '✏️', '📝', '💡', '🌟', '🎯'].map((icon, i) => (
            <motion.div
              key={`icon-${i}`}
              className="floating-educational-icon"
              style={{
                left: `${20 + i * 9}%`,
                bottom: `${15 + (i % 3) * 15}%`,
                transform: `translateZ(${i * 8}px)`
              }}
              animate={{
                y: [-25, 25, -25],
                rotate: [0, 180, 0],
                scale: [0.8, 1.3, 0.8]
              }}
              transition={{
                duration: 9 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Interactive Learning Paths */}
        <div className="learning-paths">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`path-${i}`}
              className="learning-path"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                transform: `rotate(${i * 30}deg)`
              }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Dynamic Word Cloud */}
        <div className="word-cloud">
          {['English', 'Grammar', 'Vocabulary', 'Speaking', 'Writing', 'Listening'].map((word, i) => (
            <motion.div
              key={`word-${i}`}
              className="cloud-word"
              style={{
                left: `${25 + i * 12}%`,
                top: `${40 + Math.cos(i) * 15}%`,
                fontSize: `${1 + i * 0.2}rem`
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.9, 0.4],
                rotateY: [0, 360]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Parallax Background Layers */}
        <motion.div
          className="parallax-layer layer-1"
          style={{
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
          }}
        />
        <motion.div
          className="parallax-layer layer-2"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`
          }}
        />
        <motion.div
          className="parallax-layer layer-3"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0)`
          }}
        />
      </div>

      <div className="container">
        <div className="hero-layout-enhanced">
          {/* Enhanced Left Content */}
          <motion.div 
            className="hero-content-enhanced"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Educational Quote */}
            <motion.div 
              className="educational-quote"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="quote-icon">💡</span>
              <p>{educationalQuotes[i18n.language]?.[0] || educationalQuotes.en[0]}</p>
            </motion.div>

            {/* Enhanced Dynamic Title */}
            <div className="hero-title-container-enhanced">
              <motion.h1
                className="hero-title-enhanced"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="title-line-1">
                  {t('hero.title1', 'Master English')}
                </span>
                <br />
                <span className="title-line-2">
                  {t('hero.title2', 'Achieve')} 
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      className="rotating-word-enhanced"
                      initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateX: 90, scale: 0.8 }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      {displayWords[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
            </div>

            <motion.p 
              className="hero-subtitle-enhanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('hero.subtitle', 'Transform your English skills with personalized, expert-led lessons designed for rapid progress and lasting fluency.')}
            </motion.p>

            {/* Enhanced Interactive Features Grid */}
            <motion.div 
              className="hero-features-grid"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`hero-feature-card ${activeFeature === index ? 'active' : ''}`}
                  onHoverStart={() => setActiveFeature(index)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: `0 20px 40px ${feature.color}20`
                  }}
                  style={{
                    borderColor: activeFeature === index ? feature.color : 'transparent'
                  }}
                >
                  <div className="feature-icon-enhanced" style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                  <div className="feature-content-enhanced">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                  <motion.div 
                    className="feature-progress"
                    initial={{ width: 0 }}
                    animate={{ width: activeFeature === index ? '100%' : '0%' }}
                    style={{ backgroundColor: feature.color }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div 
              className="hero-cta-section"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="cta-buttons">
                <motion.button 
                  className="hero-button-primary-enhanced"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <span className="button-icon">🚀</span> */}
                    <a href="https://wa.me/+966575101706" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {t('hero.cta', 'Start Learning Today')}
                    </a>
                  

                  <motion.span 
                    className="button-arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
                
                {/* <motion.button 
                  className="hero-button-secondary-enhanced"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="play-icon">▶</span>
                  {t('hero.demo', 'Watch Demo')}
                </motion.button> */}
              </div>

             
            </motion.div>

            {/* Enhanced Stats with Icons */}
            <AnimatePresence>
              {showStats && (
                <motion.div 
                  className="hero-stats-enhanced"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="stat-item-enhanced"
                      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ 
                        delay: 1.3 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number-enhanced">{stat.number}</div>
                      <div className="stat-label-enhanced">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Right Visual */}
          <motion.div 
            className="hero-visual-enhanced"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero-image-container-enhanced">
              <motion.div
                className="image-wrapper"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="English Learning Environment"
                  className="hero-image-enhanced"
                />
                
                {/* Enhanced Floating Cards */}
                <motion.div 
                  className="floating-card-enhanced card-1"
                  animate={{
                    y: [-15, 15, -15],
                    rotateZ: [0, 5, 0],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="card-icon-enhanced">�</div>
                  <div className="card-content">
                    <h5>{t('hero.card1', 'Progress Tracking')}</h5>
                    <p>Real-time analytics</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="floating-card-enhanced card-2"
                  animate={{
                    y: [15, -15, 15],
                    rotateZ: [0, -5, 0],
                    scale: [1.05, 0.95, 1.05]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="card-icon-enhanced">�</div>
                  <div className="card-content">
                    <h5>{t('hero.card2', 'Personalized')}</h5>
                    <p>AI-powered lessons</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="floating-card-enhanced card-3"
                  animate={{
                    y: [-10, 20, -10],
                    rotateZ: [0, 3, 0],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="card-icon-enhanced">�</div>
                  <div className="card-content">
                    <h5>{t('hero.card3', 'Certified')}</h5>
                    <p>International standards</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
    <WhatsApp/>
    
  </>

  );
};

export default Hero;