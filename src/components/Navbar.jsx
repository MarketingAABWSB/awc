import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
        <Link to="/" className="nav-logo" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
          <img src="/LOGO_AWC.png" alt="Azam Work Construction" style={{ height: '70px', objectFit: 'contain' }} />
        </Link>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#laman-utama" className="active" onClick={(e) => handleNavClick(e, 'laman-utama')}>Laman Utama</a>
          <a href="#tentang-kami" onClick={(e) => handleNavClick(e, 'tentang-kami')}>Tentang Kami</a>
          
          <div 
            className="nav-dropdown-container"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="#servis-kami" className="dropdown-trigger" onClick={(e) => handleNavClick(e, 'servis-kami')}>
              Servis Kami <ChevronDown size={14} />
            </a>
            {isServicesOpen && (
              <div className="nav-dropdown-menu">
                <Link to="/services">Penyaman Udara (Aircond)</Link>
                <Link to="/services">Pendawaian Elektrik (Wiring)</Link>
                <Link to="/services">Sistem Keselamatan (CCTV)</Link>
              </div>
            )}
          </div>
          
          <a href="#kenapa-pilih-kami" onClick={(e) => handleNavClick(e, 'kenapa-pilih-kami')}>Kenapa Kami</a>
          <a href="#hubungi-kami" onClick={(e) => handleNavClick(e, 'hubungi-kami')}>Hubungi Kami</a>
        </div>

        <div className="nav-actions">
          <div className="social-circles">
            <a href="https://www.tiktok.com/@azamworkconstruction" target="_blank" rel="noopener noreferrer" className="social-circle" title="@azamworkconstruction">
              {/* TikTok SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://www.facebook.com/search/top?q=azam%20work%20construction" target="_blank" rel="noopener noreferrer" className="social-circle" title="Azam Work Construction">
              {/* Facebook SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://wa.me/60177079747" target="_blank" rel="noopener noreferrer" className="social-circle" title="017-707 9747">
              {/* WhatsApp / Message SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:azam.wconstruction@gmail.com" className="social-circle" title="azam.wconstruction@gmail.com">
              {/* Email SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
        
        <button className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
