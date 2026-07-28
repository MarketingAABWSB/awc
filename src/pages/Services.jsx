import React, { useEffect } from 'react';
import { Wind, Zap, Shield } from 'lucide-react';

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
                  Menyediakan perkhidmatan lengkap merangkumi konsultasi pemilihan kapasiti (HP) yang sesuai, pemasangan unit baharu, penyelenggaraan berjadual (chemical cleaning dan servis biasa), hingga pembaikan kerosakan teknikal seperti kebocoran gas, masalah pemampat (compressor), atau kecekapan penyejukan yang merosot. Fokus diberikan kepada pengoptimuman penggunaan tenaga elektrik serta pemanjangan jangka hayat peralatan.
                </p>
              </div>
              <div style={{ order: 2, borderRadius: '1rem', overflow: 'hidden', height: '350px' }}>
                <img src="/aircond.jpg" alt="Penyaman Udara" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                  Pelaksanaan kerja pendawaian fasa tunggal (single-phase) dan tiga fasa (three-phase), penambahan mata kuasa (plug point) dan pencahayaan, pembaikan litar pintas, serta menaik taraf papan agihan (DB board). Turut menyediakan pembekalan komponen serta peralatan elektrik dan elektronik yang mematuhi piawaian keselamatan industri bagi menjamin keselamatan struktur bangunan daripada risiko kegagalan sistem kuasa.
                </p>
              </div>
              <div style={{ order: 1, borderRadius: '1rem', overflow: 'hidden', height: '350px' }}>
                <img src="/wiring.jpg" alt="Pendawaian Elektrik" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                  Rekabentuk susun atur, pemasangan, dan pengaturcaraan kamera litar tertutup (CCTV) berdefinisi tinggi, sama ada jenis analog mahupun IP camera. Sistem ini diintegrasikan dengan fungsi pemantauan jarak jauh (remote viewing) terus ke peranti mudah alih pelanggan untuk pengawasan 24/7, disokong oleh perkhidmatan penyelenggaraan serta penentukuran semula sistem bagi memastikan liputan keselamatan tanpa jurang.
                </p>
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
