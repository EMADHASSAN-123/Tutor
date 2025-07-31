// WhatsApp Floating Button Component
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WhatsApp= () => {
  const { t } = useTranslation();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "+966575101706"; 
    const message = encodeURIComponent(
      t('whatsapp.message', 'Hello! I\'m interested in English lessons. Can you tell me more about your services?')
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleWhatsAppClick();
      }}
      className="whatsapp-float"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="whatsapp-tooltip">
        {t('whatsapp.tooltip', 'Chat with us on WhatsApp')}
      </span>
      📱
    </motion.a>
  );
};

export default WhatsApp;