import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroFeatures from './HeroFeatures';
import HeroStats from './HeroStats';
import HeroCTA from './HeroCTA';
import { educationalQuotes } from './constants';

const HeroContent = ({ currentWord, showStats, activeFeature, setActiveFeature, displayWords }) => {
  const { t, i18n } = useTranslation();
  return (
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

      {/* Title */}
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
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {displayWords[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p 
        className="hero-subtitle-enhanced"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {t('hero.subtitle', 'Transform your English skills with personalized, expert-led lessons...')}
      </motion.p>

      <HeroFeatures 
        activeFeature={activeFeature} 
        setActiveFeature={setActiveFeature}
      />

      <HeroCTA />

      <AnimatePresence>
        {showStats && <HeroStats />}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroContent;
