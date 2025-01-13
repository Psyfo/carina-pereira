import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h1 className='hero-title'>Welcome to Our Website</h1>
        <p className='hero-subtitle'>
          We are glad to have you here. Explore our content and enjoy your stay!
        </p>
        <button className='hero-button'>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
