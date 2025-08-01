import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroVisual = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="hero-visual-enhanced"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="hero-image-container-enhanced">
        <motion.div
          className="image-wrapper"
          whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="English Learning Environment"
            className="hero-image-enhanced"
          />
          
          {/* Floating Cards */}
          <FloatingCard 
            className="card-1"
            animate={{ y: [-15, 15, -15], rotateZ: [0, 5, 0], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            title={t('hero.card1', 'Progress Tracking')}
            description="Real-time analytics"
          />
          {/* Other cards... */}
        </motion.div>
      </div>
    </motion.div>
  );
};

const FloatingCard = ({ className, animate, transition, title, description }) => (
  <motion.div 
    className={`floating-card-enhanced ${className}`}
    animate={animate}
    transition={transition}
  >
    <div className="card-icon-enhanced"></div>
    <div className="card-content">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  </motion.div>
);

export default HeroVisual;
