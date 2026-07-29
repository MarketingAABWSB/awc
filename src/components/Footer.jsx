import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
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
    <footer id="hubungi-kami" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/LOGO_AWC.png" alt="Azam Work Construction" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
            <p className="footer-tagline">
              Pakar Penyelesaian Teknikal & Utiliti Anda
            </p>
            <div className="social-links">
              <a href="https://www.tiktok.com/@azamworkconstruction" target="_blank" rel="noopener noreferrer" className="social-icon" title="@azamworkconstruction">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/search/top?q=azam%20work%20construction" target="_blank" rel="noopener noreferrer" className="social-icon" title="Azam Work Construction">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4>Pautan Pantas</h4>
            <div className="footer-links">
              <a href="#laman-utama" onClick={(e) => handleNavClick(e, 'laman-utama')}>Laman Utama</a>
              <a href="#tentang-kami" onClick={(e) => handleNavClick(e, 'tentang-kami')}>Tentang Kami</a>
              <a href="#servis-kami" onClick={(e) => handleNavClick(e, 'servis-kami')}>Servis Kami</a>
              <a href="#kenapa-pilih-kami" onClick={(e) => handleNavClick(e, 'kenapa-pilih-kami')}>Kenapa Kami</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4>Servis Kami</h4>
            <div className="footer-links">
              <Link to="/services">Penyaman Udara (Aircond)</Link>
              <Link to="/services">Pendawaian Elektrik (Wiring)</Link>
              <Link to="/services">Sistem Keselamatan (CCTV)</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4>Hubungi Kami</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>
                  <a href="https://maps.app.goo.gl/sJMaPrHHePjaCtUH8" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
                    Lot 1966a, Jalan Wakaf Stan,<br />
                    Kubang Kerian,<br />
                    16150 Kota Bharu, Kelantan.
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>017-707 9747</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>azam.wconstruction@gmail.com</span>
              </div>
            </div>
            <div className="operating-hours">
              <h5>Waktu Operasi</h5>
              <p>Sab - Kha: 9:00 AM – 6:00 PM</p>
              <p style={{ color: 'var(--primary)' }}>Jumaat: Tutup</p>
            </div>
          </div>

          {/* Map Column */}
          <div>
            <h4>Cari Kami</h4>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.334057889104!2d102.2618991!3d6.084126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDUnMDMuMyJOIDEwMsKwMTUnNDIuOCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2026 AZAM WORK CONSTRUCTION. Hak cipta terpelihara.
        </div>
      </div>
    </footer>
  );
}
