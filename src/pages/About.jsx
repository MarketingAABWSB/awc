import React, { useEffect } from 'react';
import { Target, Compass, User, Users } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Pengenalan Syarikat (Kisah Kami style) */}
      <section className="section" style={{ backgroundColor: 'var(--background)', paddingTop: '4rem' }}>
        <div className="container">
          <div className="about-split-layout">
            <div className="about-split-text">
              <span className="section-label">PENGENALAN SYARIKAT</span>
              <h2 className="section-heading-large">Pakar Penyelesaian Teknikal & Utiliti Anda.</h2>
              <div className="divider-small"></div>
              
              <div className="about-description">
                <p>
                  <strong>Azam Work Construction</strong> ialah sebuah perniagaan perkongsian yang ditubuhkan pada Oktober 2022. Kami mengkhusus dalam menyediakan penyelesaian teknikal dan utiliti berkualiti tinggi untuk premis kediaman dan komersial.
                </p>
                <p>
                  Fokus utama perkhidmatan kami merangkumi kerja-kerja sistem penyaman udara yang menyeluruh, pendawaian elektrik, pemasangan CCTV, autogate dan sistem alarm keselamatan untuk memastikan keselesaan dan keselamatan pelanggan kami.
                </p>
              </div>
            </div>
            
            <div className="about-split-image">
              <div className="image-wrapper-with-badge">
                <img src="/sign.jpeg" alt="Azam Work Construction Team" className="main-rounded-img" />
                <div className="floating-badge">
                  <span className="badge-title">2022</span>
                  <span className="badge-subtitle">TAHUN DITUBUHKAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hala Tuju (Siapa Kami style) */}
      <section className="section" style={{ backgroundColor: '#111827', color: 'white' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#94a3b8' }}>HALA TUJU KAMI</span>
          <h2 className="section-heading-large" style={{ color: 'white', marginBottom: '3rem' }}>Kecemerlangan Teknikal,<br/>Keselesaan Optimum.</h2>
          
          <div className="dark-grid-card">
            <div className="dark-grid">
              {/* Visi */}
              <div className="dark-grid-item">
                <span className="grid-item-label">VISI</span>
                <h3 className="grid-item-heading">Visi Kami</h3>
                <p className="grid-item-text">
                  Menjadi penyedia perkhidmatan teknikal utiliti dan sistem keselamatan premis yang diyakini serta menjadi pilihan utama menerusi hasil kerja yang selamat, cekap, dan berkualiti tinggi.
                </p>
                <div className="grid-item-divider"></div>
              </div>
              
              {/* Misi */}
              <div className="dark-grid-item">
                <span className="grid-item-label">MISI</span>
                <h3 className="grid-item-heading">Misi Kami</h3>
                <p className="grid-item-text">
                  Memberikan perkhidmatan pemasangan, penyelenggaraan, dan pembaikan teknikal (elektrik, penyaman udara, CCTV, autogate dan sistem alarm keselamatan) yang berkualiti tinggi, telus, serta menepati piawaian keselamatan demi memastikan keselesaan, perlindungan, dan kepuasan berterusan untuk setiap pelanggan kami.
                </p>
                <div className="grid-item-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latar Belakang & Carta Organisasi (Pasukan Kami style) */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <span className="section-label">KEPIMPINAN SYARIKAT</span>
          <h2 className="section-heading-large" style={{ marginBottom: '3rem' }}>Latar Belakang Pengarah</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
            {/* Director 1 */}
            <div className="director-card" style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', marginBottom: '2rem', border: '5px solid white', boxShadow: '0 15px 30px rgba(0,0,0,0.12)' }}>
                <img src="/boss azam.png" alt="En. Muhamad Azam Bin Yaakub" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>En. Muhamad Azam Bin Yaakub</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Sebagai peneraju utama syarikat, kepakaran En. Muhamad Azam tertumpu pada pengurusan strategik, perancangan kewangan dan pengembangan perniagaan merentasi pelbagai sektor termasuk pembinaan, automotif, dan agro. Beliau memiliki pengalaman lebih sedekad dalam memajukan kejuruteraan dan industri, serta amat mahir dalam pengurusan syarikat korporat Bumiputera. Kredibiliti kepimpinan beliau dikukuhkan lagi dengan pendaftaran sijil-sijil utama industri seperti Sijil Taraf Bumiputera (STB), CIDB, dan Kementerian Kewangan (MOF).
              </p>
            </div>
            
            {/* Director 2 */}
            <div className="director-card" style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', marginBottom: '2rem', border: '5px solid white', boxShadow: '0 15px 30px rgba(0,0,0,0.12)' }}>
                <img src="/boss zul.png" alt="Zulbaharin Bin Mamat" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Zulbaharin Bin Mamat</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                En. Zulbaharin memainkan peranan penting dalam menerajui aspek pengurusan operasi dan teknikal AWC. Kepakaran utama beliau tertumpu pada penyeliaan projek di lapangan, kawalan kualiti (QC), dan pengurusan tenaga kerja mahir bagi sistem penyaman udara, pendawaian elektrik, dan CCTV. Berbekalkan pengalaman luas dan sijil kompetensi penyeliaan tapak bina, beliau berdedikasi memastikan setiap projek pembinaan dan penyelenggaraan disiapkan mengikut jadual dan mematuhi piawaian kerja yang paling ketat.
              </p>
            </div>
          </div>

          <span className="section-label">STRUKTUR ORGANISASI</span>
          <h2 className="section-heading-large" style={{ marginBottom: '3rem' }}>Carta Organisasi</h2>
          
          <div className="org-chart-card">
            <img src="/org-chart.png" alt="Carta Organisasi Azam Work Construction" />
          </div>
        </div>
      </section>
    </div>
  );
}
