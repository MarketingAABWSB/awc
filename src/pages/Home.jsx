import React from 'react';
import { ArrowRight, Target, Compass } from 'lucide-react';
import TikTokCarousel from '../components/TikTokCarousel';
import ServiceCarousel from '../components/ServiceCarousel';
import ServiceCard from '../components/ServiceCard';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="laman-utama" className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(/main.bg.png)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container-new">
          <div className="hero-title-center">
            <h1>AZAM WORK CONSTRUCTION</h1>
          </div>
          <div className="hero-bottom-grid">
            <div className="hero-bottom-left">
              <h2>Pakar Penyaman Udara, Pendawaian, CCTV, Autogate & Alarm untuk Premis Anda.</h2>
              <a href="https://api.whatsapp.com/send/?phone=60177079747&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-pill">
                DAPATKAN JANJI TEMU!
              </a>
            </div>
            <div className="hero-bottom-right">
              <div className="hero-description-bordered">
                <p>
                  Penyelesaian teknikal dan utiliti yang komprehensif, merangkumi pemasangan, penyelenggaraan, dan pembaikan untuk memastikan keselesaan dan keselamatan kediaman atau ruang komersial anda sentiasa pada tahap optimum.
                </p>
                <p>
                  Rakan kongsi dipercayai anda untuk hasil kerja yang teliti, selamat, dan berkualiti tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid Intro/Visi/Misi */}
      <section id="tentang-kami" className="section about">
        <div className="container">
          <h2 className="section-title">Tentang Kami</h2>
          <div className="bento-grid">
            {/* Box 1: Intro */}
            <div className="bento-card bento-main" style={{ minHeight: '100%' }}>
              <img src="/sign.jpeg" alt="Azam Work Construction" className="bento-bg" />
              <div className="bento-overlay-dark"></div>
              <div className="bento-content">
                <span className="bento-label bento-label-primary">PENGENALAN SYARIKAT</span>
                <h3>Kepakaran Teknikal, Diperkukuh oleh Pengalaman & Keselamatan.</h3>
                <p>
                  <strong>Azam Work Construction</strong> ditubuhkan pada Oktober 2022 dan mengkhusus dalam menyediakan penyelesaian teknikal dan utiliti berkualiti tinggi untuk premis kediaman dan komersial melalui perkhidmatan penyaman udara, pendawaian elektrik, sistem CCTV, autogate, dan alarm keselamatan.
                </p>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/about" className="btn-arrow">
                    Lebih Lanjut <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bento-side-stack">
              {/* Box 2: Visi */}
              <div className="bento-card bento-side-card" style={{ padding: '2.5rem' }}>
                <img src="/wiring2.jpg" alt="Visi Kami" className="bento-bg" />
                <div className="bento-overlay-dark" style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7))' }}></div>
                <div className="bento-content">
                  <span className="bento-label bento-label-primary" style={{ border: 'none', backgroundColor: 'transparent', padding: 0 }}>
                    <Target size={20} /> VISI KAMI
                  </span>
                  <p style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '400', lineHeight: '1.6' }}>
                    Menjadi penyedia perkhidmatan teknikal utiliti dan sistem keselamatan premis yang diyakini serta menjadi pilihan utama menerusi hasil kerja yang selamat, cekap, dan berkualiti tinggi.
                  </p>
                </div>
              </div>

              {/* Box 3: Misi */}
              <div className="bento-card bento-side-card" style={{ padding: '2.5rem' }}>
                <img src="/CCTV Installations.jpg" alt="Misi Kami" className="bento-bg" />
                <div className="bento-overlay-dark" style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7))' }}></div>
                <div className="bento-content">
                  <span className="bento-label bento-label-primary" style={{ border: 'none', backgroundColor: 'transparent', padding: 0 }}>
                    <Compass size={20} /> MISI KAMI
                  </span>
                  <p style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: '400', lineHeight: '1.6' }}>
                    Memberikan perkhidmatan pemasangan, penyelenggaraan, dan pembaikan teknikal yang telus, berkualiti, serta menepati piawaian demi memastikan keselesaan pelanggan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servis-kami" className="section services">
        <div className="container">
          <h2 className="section-title">Kepakaran Kami</h2>
          <ServiceCarousel>
            {Object.values(servicesData).map((service) => <ServiceCard key={service.id} service={service} />)}
          </ServiceCarousel>
          
          <div style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
            <Link to="/services" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'var(--primary)', color: 'var(--secondary)' }}>
              Lihat Maklumat Penuh <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="kenapa-pilih-kami" className="section why-us">
        <div className="container">
          <h2 className="section-title">Kenapa Pilih Azam Work Construction?</h2>
          <div className="why-us-grid">
            <div className="feature">
              <span className="feature-number">01</span>
              <h3>Kepakaran Bersepadu 5-Dalam-1</h3>
              <p>
                Penyelesaian aircond, wiring, CCTV, autogate, dan alarm keselamatan di bawah satu bumbung. Jimatkan masa dan kos anda tanpa perlu mencari pelbagai kontraktor berasingan.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">02</span>
              <h3>Hasil Kerja Kemas & Selamat</h3>
              <p>
                Pemasangan dilakukan dengan teliti, mematuhi spesifikasi keselamatan industri, dan menjamin kemasan akhir (finishing) yang rapi.
              </p>
            </div>
            <div className="feature">
              <span className="feature-number">03</span>
              <h3>Harga Telus & Sokongan Berterusan</h3>
              <p>
                Sebut harga jujur tanpa sebarang kos tersembunyi, disokong oleh khidmat sokongan selepas jualan (after-sales support) yang pantas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="berita-panduan" className="section articles-preview" aria-labelledby="home-articles-heading">
        <div className="container">
          <div className="articles-section-header">
            <div>
              <span className="articles-eyebrow">PANDUAN PENJAGAAN RUMAH</span>
              <h2 id="home-articles-heading">Berita & Panduan</h2>
              <p>Kenali punca masalah aircond dan elektrik, serta langkah yang sesuai untuk rumah anda.</p>
            </div>
            <Link to="/artikel" className="articles-text-link">
              Lihat Semua Artikel <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="articles-grid">
            {articles.slice(0, 2).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      {/* Ikuti Kami - TikTok */}
      <section id="ikuti-kami" style={{ backgroundColor: '#1c1c1c', padding: '5rem 0', overflow: 'hidden' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Video TikTok Kami</h2>
          
          <TikTokCarousel />
        </div>
      </section>
    </>
  );
}
