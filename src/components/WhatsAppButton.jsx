import React from 'react';

const WhatsAppButton = ({ message, children, color }) => {
    const phoneNumber = "+966575101706"; 
    const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="service-cta-new"
      style={{ 
        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
        boxShadow: `0 4px 14px ${color}40`,
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: '8px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
