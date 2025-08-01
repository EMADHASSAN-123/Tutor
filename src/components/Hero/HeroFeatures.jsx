import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { features } from './constants';

const HeroFeatures = ({ activeFeature, setActiveFeature }) => {
  const { t } = useTranslation();

  return (
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
            <h4>{t(feature.titleKey, feature.titleDefault)}</h4>
            <p>{t(feature.descKey, feature.descDefault)}</p>
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
  );
};

export default HeroFeatures;
