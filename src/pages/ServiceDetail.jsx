import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Check, Plus, Minus, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

            {service.gallery && (
              <div className="service-gallery" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Galeri Projek</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {service.gallery.map((img, idx) => (
                    <div key={idx} onClick={() => setSelectedImageIndex(idx)} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', aspectRatio: '1/1', cursor: 'pointer' }}>
                      <img src={img} alt={`${service.title} Gallery ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                  ))}
                </div>
              </div>
            )}

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

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem', zIndex: 10000 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Prev Button */}
          <button 
            style={{ position: 'absolute', left: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem', zIndex: 10000 }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : service.gallery.length - 1));
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={service.gallery[selectedImageIndex]} 
            alt="Enlarged view" 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '0.5rem' }} 
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button 
            style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem', zIndex: 10000 }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev < service.gallery.length - 1 ? prev + 1 : 0));
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
