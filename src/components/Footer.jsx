import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('testimonials'), href: '#testimonials' },
    { name: t('contact'), href: '#contact' }
  ];

  const services = [
    { name: t('services.curriculum'), href: '#services' },
    { name: t('services.conversation'), href: '#services' },
    { name: t('services.assessment'), href: '#services' },
    { name: t('services.foundation'), href: '#services' },
    { name: t('services.children'), href: '#services' }
  ];


  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#', color: '#1877F2' },
    { name: 'WhatsApp', icon: '💬', href: '#', color: '#25D366' },
    { name: 'Telegram', icon: '✈️', href: '#', color: '#0088CC' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer-new">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <motion.div 
            className="footer-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <motion.div className="footer-brand" variants={itemVariants}>
              <div className="footer-logo">
                <span className="logo-text">{t('footer.brand')}</span>
              </div>
              <p className="footer-description">
                {t('footer.description', 'Empowering students worldwide to achieve English fluency through personalized, engaging, and effective learning experiences.')}
              </p>
              
              {/* Contact Info */}
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>T.Omnaite667@gmail.com</span>
                </div>
                {/* <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div> */}
                {/* <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>{t('footer.location', 'Online Worldwide')}</span>
                </div> */}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-links" variants={itemVariants}>
              <h4 className="footer-title">{t('footer.quickLinks', 'Quick Links')}</h4>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.href} className="footer-link">
                      <span className="link-arrow">→</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-links" variants={itemVariants}>
              <h4 className="footer-title">{t('footer.services', 'Services')}</h4>
              <ul className="footer-list">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={service.href} className="footer-link">
                      <span className="link-arrow">→</span>
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div className="footer-newsletter" variants={itemVariants}>
              <h4 className="footer-title">{t('footer.newsletter', 'Stay Connected')}</h4>
              <p className="newsletter-description">
                {t('footer.newsletterDesc', 'Get English learning tips and updates delivered to your inbox.')}
              </p>
              
              {/* <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder', 'Enter your email')}
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('footer.subscribe', 'Subscribe')}
                </motion.button>
              </div> */}

              {/* Social Links */}
              <div className="footer-social">
                <h5 className="social-title">{t('footer.followUs', 'Follow Us')}</h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} {t('footer.brand')}. 
                {t('footer.rights', 'All rights reserved.')}
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">{t('footer.privacy', 'Privacy Policy')}</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">{t('footer.terms', 'Terms of Service')}</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">{t('footer.cookies', 'Cookie Policy')}</a>
            </div>

            <div className="footer-language">
              <button 
                className="language-toggle"
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
              >
                <span className="language-icon">🌐</span>
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="footer-bottom border-t border-slate-700/50 py-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="footer-bottom-content flex flex-col md:flex-row items-center justify-between gap-4">
            {/* ... existing copyright and links ... */}

            {/* Developer Credit */}
            <div className="developer-credit group">
              <div className="text-slate-400 text-sm transition-all group-hover:text-white">
                {t('footer.developedBy', 'development by')} 
                <a 
                  href="https://emadhassan-123.github.io/Developer-EmadHassan/" 
                  className="ml-1 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Emad Hassan
                </a>
              </div>
              <div className="h-1 mt-1 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
