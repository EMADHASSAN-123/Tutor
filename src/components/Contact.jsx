import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.errors.name');
    if (!formData.email.trim()) newErrors.email = t('contact.errors.email');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contact.errors.email_format');
    if (!formData.message.trim()) newErrors.message = t('contact.errors.message');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Set loading state
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.div
          className="title-underline"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="location-icon">📍</i>
              </div>
              <div className="contact-text">
                <h3>{t('contact.address.title')}</h3>
                <p>{t('contact.address.value')}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="email-icon">✉️</i>
              </div>
              <div className="contact-text">
                <h3>{t('contact.email.title')}</h3>
                <p>{t('contact.email.value')}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="phone-icon">📞</i>
              </div>
              <div className="contact-text">
                <h3>{t('contact.phone.title')}</h3>
                <p>{t('contact.phone.value')}</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="hours-icon">🕒</i>
              </div>
              <div className="contact-text">
                <h3>{t('contact.hours.title')}</h3>
                <p>{t('contact.hours.value')}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus === 'success' ? (
              <motion.div 
                className="form-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✓</div>
                <h3>{t('contact.success.title')}</h3>
                <p>{t('contact.success.message')}</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <motion.button 
                  type="submit"
                  className={`contact-submit ${formStatus === 'loading' ? 'loading' : ''}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <span className="loading-spinner"></span>
                  ) : t('contact.form.submit')}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
