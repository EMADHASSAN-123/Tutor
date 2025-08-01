import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroCTA = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="hero-cta-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div className="cta-buttons">
        <motion.button 
          className="hero-button-primary-enhanced"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
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
      </div>
    </motion.div>
  );
};

export default HeroCTA;
