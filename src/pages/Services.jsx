import React, { useEffect } from 'react';
import { Wind, Zap, Shield } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Servis Kami</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Penyelesaian utiliti dan teknikal yang komprehensif, merangkumi pemasangan, penyelenggaraan, dan pembaikan untuk premis anda.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* Aircond Detail */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)' }} className="service-detail-row">
              <div style={{ order: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Wind size={32} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 0, color: 'var(--secondary)' }}>Penyaman Udara (Aircond)</h2>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {servicesData.aircond.description}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="/services/aircond" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Maklumat Lanjut <Wind size={18} />
                  </a>
                </div>
              </div>
              <div style={{ order: 2, borderRadius: '1rem', overflow: 'hidden', height: '350px' }}>
                <img src="/AC1.jpeg" alt="Penyaman Udara" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Wiring Detail */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)' }} className="service-detail-row reverse">
              <div style={{ order: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Zap size={32} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 0, color: 'var(--secondary)' }}>Pendawaian Elektrik (Wiring)</h2>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {servicesData.wiring.description}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="/services/wiring" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Maklumat Lanjut <Zap size={18} />
                  </a>
                </div>
              </div>
              <div style={{ order: 1, borderRadius: '1rem', overflow: 'hidden', height: '350px' }}>
                <img src="/wiring 1.jpeg" alt="Pendawaian Elektrik" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* CCTV Detail */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-sm)' }} className="service-detail-row">
              <div style={{ order: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Shield size={32} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 0, color: 'var(--secondary)' }}>Sistem Keselamatan (CCTV)</h2>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {servicesData.cctv.description}
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="/services/cctv" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Maklumat Lanjut <Shield size={18} />
                  </a>
                </div>
              </div>
              <div style={{ order: 2, borderRadius: '1rem', overflow: 'hidden', height: '350px' }}>
                <img src="/cctv.jpg" alt="Sistem CCTV" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Mobile media queries specific to this page could go in index.css, but we will rely on standard flex wrapping if we added a CSS class */}
    </div>
  );
}
