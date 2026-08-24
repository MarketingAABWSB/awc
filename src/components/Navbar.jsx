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
      <div className="container nav-container">

        {/* Hamburger Menu (Mobile Left) */}
        <button className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Logo (Centered) */}
        <Link to="/" className="nav-logo" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
          <img src="/LOGO_AWC.png" alt="Azam Work Construction" style={{ height: '70px', objectFit: 'contain' }} />
        </Link>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#laman-utama" className="active" onClick={(e) => handleNavClick(e, 'laman-utama')}>Laman Utama</a>
          <a href="#tentang-kami" onClick={(e) => handleNavClick(e, 'tentang-kami')}>Tentang Kami</a>

          <div
            className="nav-dropdown-container"
            onMouseEnter={() => window.innerWidth > 1024 && setIsServicesOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setIsServicesOpen(false)}
          >
            <a
              href="#servis-kami"
              className="dropdown-trigger"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                } else {
                  handleNavClick(e, 'servis-kami');
                }
              }}
            >
              Servis Kami <ChevronDown size={14} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
            </a>
            {isServicesOpen && (
              <div className="nav-dropdown-menu">
                <Link to="/services/aircond" onClick={() => setIsMobileMenuOpen(false)}>Penyaman Udara (Aircond)</Link>
                <Link to="/services/wiring" onClick={() => setIsMobileMenuOpen(false)}>Pendawaian Elektrik (Wiring)</Link>
                <Link to="/services/cctv" onClick={() => setIsMobileMenuOpen(false)}>Sistem Keselamatan (CCTV)</Link>
              </div>
            )}
          </div>

          <a href="#kenapa-pilih-kami" onClick={(e) => handleNavClick(e, 'kenapa-pilih-kami')}>Kenapa Kami</a>
          <a href="#hubungi-kami" onClick={(e) => handleNavClick(e, 'hubungi-kami')}>Hubungi Kami</a>
        </div>

        <div className="nav-actions">
          <div className="social-circles">
            <a href="https://www.tiktok.com/@azamworkconstruction" target="_blank" rel="noopener noreferrer" className="social-circle" title="@azamworkconstruction">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592751865212" target="_blank" rel="noopener noreferrer" className="social-circle" title="Azam Work Construction">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=60177079747&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-circle" title="017-707 9747">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
            <a href="mailto:azam.wconstruction@gmail.com" className="social-circle" title="azam.wconstruction@gmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
