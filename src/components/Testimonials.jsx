import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.student1.name'),
      role: t('testimonials.student1.role'),
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: t('testimonials.student1.text'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.student2.name'),
      role: t('testimonials.student2.role'),
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
      text: t('testimonials.student2.text'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.student3.name'),
      role: t('testimonials.student3.role'),
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      text: t('testimonials.student3.text'),
      rating: 4
    },
    // {
    //   id: 4,
    //   name: t('testimonials.student4.name'),
    //   role: t('testimonials.student4.role'),
    //   image: 'https://randomuser.me/api/portraits/men/83.jpg',
    //   text: t('testimonials.student4.text'),
    //   rating: 5
    // }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Pause autoplay when user interacts
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.h2 
          className="testimonials-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('testimonials',"Student Reviews")}
        </motion.h2>
        <motion.div
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className="testimonials-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('testimonials.subtitle')}
        </motion.p>

        <div className="testimonials-carousel">
          <div className="testimonial-window">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                  <div className="rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="author-image" 
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="carousel-controls">
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="carousel-arrows">
              <button 
                className="carousel-arrow prev"
                onClick={() => {
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button 
                className="carousel-arrow next"
                onClick={() => {
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
