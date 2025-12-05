import React from 'react';
import Ballpit from './components/Ballpit';
import MagicBento from './components/MagicBento';
import logoImage from './fun2.png';
import './App.css';

function App() {
  const socialLinks = {
    portfolio: 'https://ferncube.vercel.app/',
    instagram: 'https://www.instagram.com/ferncube/?utm_source=ig_web_button_share_sheet&igsh=MTgyZDl4bjdyd2o3ag%3D%3D#',
    facebook: 'https://www.facebook.com/profile.php?id=61584200813473&rdid=R9pmJkBvQFkUaUw6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17VAm8Bt8E%2F#',
    github: 'https://github.com/ferncubetech',
    email: 'mailto:ferncubetech@gmail.com',
    phone: 'tel:+919363399198'
  };

  const socialCards = [
    {
      id: 'portfolio',
      title: 'Portfolio',
      label: 'Our Work',
      description: 'Explore our latest projects and success stories',
      link: socialLinks.portfolio,
      color: '#060010',
      icon: 'image',
      iconImage: logoImage
    },
    {
      id: 'instagram',
      title: 'Instagram',
      label: '@ferncube',
      description: 'Visual stories & behind the scenes',
      link: socialLinks.instagram,
      color: '#060010',
      icon: 'svg',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      title: 'Facebook',
      label: 'Community',
      description: 'Connect with our community',
      link: socialLinks.facebook,
      color: '#060010',
      icon: 'svg',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'github',
      title: 'GitHub',
      label: 'ferncubetech',
      description: 'Open source contributions',
      link: socialLinks.github,
      color: '#060010',
      icon: 'svg',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      id: 'email',
      title: 'Email',
      label: 'Get in Touch',
      description: 'Have a project in mind? Let\'s build it together',
      link: socialLinks.email,
      color: '#060010',
      icon: 'svg',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      id: 'phone',
      title: 'Phone',
      label: 'Call Us',
      description: 'Reach out for inquiries and collaborations',
      link: socialLinks.phone,
      color: '#060010',
      icon: 'svg',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    }
  ];

  const handleCardClick = (link) => {
    if (link && link !== '#') {
      // Handle mailto and tel links differently
      if (link.startsWith('mailto:') || link.startsWith('tel:')) {
        window.location.href = link;
      } else {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className="App">
      <div className="background-wrapper">
        <Ballpit
          count={80}
          gravity={0.001}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={true}
          colors={[0xffffff, 0x8a2be2, 0x6b46c1, 0x808080, 0x4a5568, 0x1a1a2e]}
        />
      </div>
      
      {/* Header */}
      <header className="header">
        <div className="header-brand">
          <div className="brand-logo">
            <img src={logoImage} alt="Ferncube Tech Logo" className="logo-image" />
          </div>
          <span className="brand-name">FERNCUBE</span>
        </div>
        <div className="header-status">
          <div className="status-indicator">
            <span className="status-pulse"></span>
            <span className="status-text">AVAILABLE</span>
          </div>
        </div>
        <button 
          className="share-btn" 
          onClick={() => navigator.share?.({ url: window.location.href })}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-main">
            <div className="hero-badge">
              <div className="badge-line"></div>
              <span className="badge-text">INNOVATION DRIVEN</span>
              <div className="badge-line"></div>
            </div>
            
            <h1 className="hero-title">
              <span className="title-word title-first">FERNCUBE</span>
              <span className="title-word title-second">TECH</span>
            </h1>
            
            <p className="hero-description">
              Transforming ideas into digital reality through cutting-edge 
              <span className="highlight"> web</span> and 
              <span className="highlight"> mobile</span> solutions
            </p>
          </div>
          
          <div className="hero-meta">
            <div className="meta-badge">
              <div className="meta-icon">🌍</div>
              <div className="meta-text">
                <span className="meta-label">Location</span>
                <span className="meta-value">WORLDWIDE</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-badge">
              <div className="meta-icon">✨</div>
              <div className="meta-text">
                <span className="meta-label">Status</span>
                <span className="meta-value">OPEN FOR PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Cards - MagicBento */}
      <section className="cards-container">
        <MagicBento 
          cardData={socialCards}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          onCardClick={handleCardClick}
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 Ferncube Tech</p>
          <a href="https://ferncube.vercel.app" className="footer-link">ferncube.vercel.app</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
