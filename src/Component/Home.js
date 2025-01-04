import React, { useEffect } from 'react';
import './Home.css'; // ملف CSS مخصص
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// استيراد الصورة
import hoodieImage from './IMGS/grayy.webp'; 

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });

    const navbar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero-section');
    if (navbar && heroSection) {
      const navbarHeight = navbar.offsetHeight;
      heroSection.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* النصوص على اليسار */}
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">
            <span className="highlight">Discover</span> the Perfect Hoodie for You
          </h1>
          <p className="hero-description">
            Explore our exclusive collection of hoodies that combine comfort and style. Upgrade your wardrobe with the latest trends. Limited-time offer – don't miss out! 🔥
          </p>
      
        </div>

        {/* الصورة على اليمين */}
        <div className="hero-image" data-aos="fade-left">
          <img src={hoodieImage} alt="Trendy Hoodie" />
        </div>
      </div>

      {/* تأثيرات إضافية */}
      <div className="hero-effects">
        <div className="effect-circle"></div>
        <div className="effect-circle"></div>
        <div className="effect-circle"></div>
      </div>
    </section>
  );
}

export default Hero;