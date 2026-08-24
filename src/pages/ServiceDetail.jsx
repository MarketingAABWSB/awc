import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Check, Plus, Minus, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top on load and when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = servicesData[serviceId];

  // If service is not found, we could show a 404 or redirect to home
  if (!service) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Servis Tidak Dijumpai</h2>
        <Link to="/" className="btn btn-outline" style={{ marginTop: '2rem', display: 'inline-block' }}>Kembali ke Laman Utama</Link>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const otherServices = Object.values(servicesData).filter(s => s.id !== serviceId);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Dark Header Hero */}
      <div className="service-detail-hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>SERVIS KAMI</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', margin: 0 }}>{service.title}</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginTop: '2rem' }}></div>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1rem' }}>
        <div className="service-detail-grid">
          {/* Main Content Left */}
          <div className="service-detail-main">
            <div className="service-main-image-container">
              <img src={service.image} alt={service.title} className="service-main-image" />
            </div>
            
            <div className="service-description" style={{ marginTop: '3rem' }}>
              <p>{service.description}</p>
            </div>

            <div className="faq-section" style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Soalan Lazim</h2>
              <div className="faq-accordion">
                {service.faq.map((item, index) => (
                  <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                      <span style={{ fontWeight: '600' }}>{item.q}</span>
                      <span className="faq-icon" style={{ color: 'var(--primary)' }}>
                        {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p style={{ margin: 0, padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-muted)' }}>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Right */}
          <div className="service-detail-sidebar">
            {/* Scope Box */}
            <div className="sidebar-box scope-box">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Skop Perkhidmatan</h3>
              <ul className="scope-list">
                {service.scope.map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                    <Check size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services Box */}
            <div className="sidebar-box other-services-box" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Servis Lain</h3>
              <ul className="other-services-list">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <button 
                      onClick={() => navigate(`/services/${s.id}`)}
                      className="other-service-link"
                    >
                      {s.title}
                      <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
