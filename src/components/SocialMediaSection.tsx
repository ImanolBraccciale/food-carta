import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './SocialMediaSection.css'; // Asegúrate de tener el CSS correspondiente

const SocialMediaSection: React.FC = () => {
  return (
    <section className="social-media-section text-center py-4">
       <div className="d-flex justify-content-center align-items-center">
        <a href="https://www.facebook.com/tu-pagina" className="mx-3" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={25} style={{ color: '#4267B2' }} />
        </a>
        <a href="https://www.instagram.com/tu-pagina" className="mx-3" target="_blank" rel="noopener noreferrer">
          <FaInstagram  size={25} style={{ color: '#C13584' }} />
        </a>
        <a href="https://www.twitter.com/tu-pagina" className="mx-3" target="_blank" rel="noopener noreferrer">
          <FaTwitter  size={25}style={{ color: '#1DA1F2' }} />
        </a>
        <a href="https://wa.me/tu-numero" className="mx-3" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp  size={25} style={{ color: '#25D366' }} />
        </a>
        <a href="tel:+tu-numero" className="mx-3">
          <FaPhoneAlt  size={25} style={{ color: '#34b7f1' }} />
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
