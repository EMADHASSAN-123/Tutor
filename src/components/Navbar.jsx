import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState();
  
  // console.log(useTranslation());

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };
  // console.log(i18n.language === 'en' ? 'ar' : 'en');

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav-brand">
            <motion.div 
              className="nav-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>
                {t('navbar.brand', 'T.Omnaite')}
              </span>
            </motion.div>
          </div>
          
          <div className="nav-links">
            <a href="#home" className="nav-link">{t('home')}</a>
            <a href="#about" className="nav-link">{t('about')}</a>
            <a href="#services" className="nav-link">{t('services')}</a>
            <a href="#testimonials" className="nav-link">{t('testimonials')}</a>
            <a href="#contact" className="nav-link">{t('contact')}</a>
            
            <button 
              onClick={toggleLanguage}
              className="nav-lang-btn"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-btn"
          >
            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          className="nav-mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nav-mobile-links">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>{t('home')}</a>
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>{t('about')}</a>
            <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>{t('services')}</a>
            <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>{t('testimonials')}</a>
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>{t('contact')}</a>
            
            <button 
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="nav-lang-btn"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;