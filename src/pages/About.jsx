import React, { useEffect } from 'react';
import { Target, Compass } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tentang Kami</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Kenali lebih lanjut tentang kepakaran, visi, dan misi Azam Work Construction dalam menyediakan perkhidmatan teknikal terbaik.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ marginBottom: '4rem' }}>
            <div className="about-text" style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              <h2 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Pengenalan Syarikat</h2>
              <p>
                <strong>Azam Work Construction</strong> ialah sebuah perniagaan perkongsian yang ditubuhkan pada Oktober 2022. Kami mengkhususkan kepakaran dalam menyediakan penyelesaian teknikal dan utiliti berkualiti tinggi untuk premis kediaman dan komersial.
              </p>
              <p>
                Fokus utama perkhidmatan kami merangkumi kerja-kerja sistem penyaman udara yang menyeluruh, pendawaian elektrik, dan pemasangan sistem keselamatan CCTV yang canggih untuk memastikan keselesaan dan keselamatan pelanggan kami.
              </p>
            </div>
            <div className="hero-image-placeholder" style={{ backgroundColor: '#e5e7eb', borderRadius: '1rem', overflow: 'hidden', height: '100%' }}>
               <img src="/aircond_service.jpg" alt="Azam Work Construction Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '2rem' }}>Hala Tuju Kami</h2>
          <div className="vision-mission" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="vm-card" style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Target size={32} color="var(--primary)" />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>Visi Kami</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Menjadi penyedia perkhidmatan teknikal utiliti dan sistem keselamatan premis yang diyakini serta menjadi pilihan utama menerusi hasil kerja yang selamat, cekap, dan berkualiti tinggi.
              </p>
            </div>
            
            <div className="vm-card" style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Compass size={32} color="var(--primary)" />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>Misi Kami</h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Memberikan perkhidmatan pemasangan, penyelenggaraan, dan pembaikan teknikal (elektrik, penyaman udara, dan CCTV) yang berkualiti tinggi, telus, serta menepati piawaian keselamatan demi memastikan keselesaan, perlindungan, dan kepuasan berterusan untuk setiap pelanggan kami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
