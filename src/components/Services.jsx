import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredService, setHoveredService] = useState(null);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Service data with enhanced structure
  const services = [
    {
    id: 'assessment',
    title: t('services.assessment'),
    icon: '📊',
    gradient: 'from-blue-500 to-blue-600',
    color: '#3B82F6',
    description: t('services.assessment.description'),
    features: [
      t('services.assessment.feature1'),
      t('services.assessment.feature2'),
      t('services.assessment.feature3')
    ]
    },
    {
    id: 'foundation',
    title: t('services.foundation'),
    icon: '🏗️',
    gradient: 'from-green-500 to-green-600',
    color: '#10B981',
    description: t('services.foundation.description'),
    features: [
      t('services.foundation.feature1'),
      t('services.foundation.feature2'),
      t('services.foundation.feature3')
    ]
    },
    {
    id: 'curriculum',
    title: t('services.curriculum'),
    icon: '📚',
    gradient: 'from-purple-500 to-purple-600',
    color: '#8B5CF6',
    description: t('services.curriculum.description'),
    features: [
      t('services.curriculum.feature1'),
      t('services.curriculum.feature2'),
      t('services.curriculum.feature3')
    ]
    },
    {
    id: 'conversation',
    title: t('services.conversation'),
    icon: '🗣️',
    gradient: 'from-pink-500 to-pink-600',
    color: '#EC4899',
    description: t('services.conversation.description'),
    features: [
      t('services.conversation.feature1'),
      t('services.conversation.feature2'),
      t('services.conversation.feature3')
    ]
    },
    {
    id: 'children',
    title: t('services.children'),
    icon: '🧒',
    gradient: 'from-yellow-500 to-yellow-600',
    color: '#F59E0B',
    description: t('services.children.description'),
    features: [
      t('services.children.feature1'),
      t('services.children.feature2'),
      t('services.children.feature3')
    ]
    },
    {
    id: 'pre-university',
    title: t('services.pre_university'),
    icon: '🏫',
    gradient: 'from-teal-500 to-teal-600',
    color: '#14B8A6',
    description: t('services.pre_university.description'),
    features: [
      t('services.pre_university.feature1'),
      t('services.pre_university.feature2'),
      t('services.pre_university.feature3')
    ]
    },
    {
      id: 'individual',
      title: t('services.individual'),
      icon: '👤',
      gradient: 'from-blue-500 to-blue-600',
      color: '#3B82F6',
      description: t('services.individual.description'),
      features: [
        t('services.individual.feature1'),
        t('services.individual.feature2'),
        t('services.individual.feature3')
      ]
    },
   
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="services" className="services-section-new">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="services-header-new"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="services-title-new"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.div
            className="title-underline-new"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="services-subtitle-new"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid-new"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card-new ${activeService === service.id ? 'active' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setActiveService(service.id)}
            >
              {/* Card Background with Gradient */}
              <div className={`service-card-bg bg-gradient-to-br ${service.gradient}`} />
              
              {/* Card Content */}
              <div className="service-card-content">
                <motion.div 
                  className="service-icon-container"
                  animate={{
                    scale: hoveredService === service.id ? 1.1 : 1,
                    rotate: hoveredService === service.id ? 10 : 0
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="service-icon-new">{service.icon}</span>
                </motion.div>
                
                <h3 className="service-title-card">{service.title}</h3>
                
                <motion.div 
                  className="service-preview"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredService === service.id ? 1 : 0.7 
                  }}
                >
                  <p className="service-description-preview">
                    {service.description.substring(0, 100)}...
                  </p>
                </motion.div>

                <motion.button
                  className="service-learn-more"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('services.learn_more', 'Learn More')}
                  <span className="arrow-icon">→</span>
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="floating-element floating-element-1"
                animate={{
                  y: hoveredService === service.id ? [-5, 5, -5] : [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="floating-element floating-element-2"
                animate={{
                  y: hoveredService === service.id ? [5, -5, 5] : [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {activeService && (
            <motion.div 
              className="service-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            >
              <motion.div 
                className="service-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const service = services.find(s => s.id === activeService);
                  return service ? (
                    <>
                      {/* Modal Header */}
                      <div 
                        className="service-modal-header"
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` 
                        }}
                      >
                        <div className="service-modal-header-content">
                          <span className="service-modal-icon">{service.icon}</span>
                          <h3 className="service-modal-title">{service.title}</h3>
                        </div>
                        <button 
                          className="service-modal-close"
                          onClick={() => setActiveService(null)}
                        >
                          ×
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="service-modal-content">
                        <motion.p 
                          className="service-modal-description"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {service.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="service-features-title">{t('services.features')}</h4>
                          <ul className="service-features-new">
                            {service.features.map((feature, index) => (
                              <motion.li 
                                key={index}
                                className="service-feature-new"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                              >
                                <span 
                                  className="feature-bullet-new"
                                  style={{ backgroundColor: service.color }}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div 
                          className="service-modal-actions"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <button 
                            className="service-cta-new"
                            style={{ 
                              background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                              boxShadow: `0 4px 14px ${service.color}40`
                            }}
                          >
                            {t('services.inquire')}
                          </button>
                        </motion.div>
                      </div>
                    </>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;