import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { stats } from './constants';

const HeroStats = () => {
  const { t } = useTranslation();

  return (
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
          transition={{ delay: 1.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotateY: 10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number-enhanced">{stat.number}</div>
          <div className="stat-label-enhanced">{t(stat.labelKey, stat.labelDefault)}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
