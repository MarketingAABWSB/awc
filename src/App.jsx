import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import { getArticleBySlug } from './data/articles';
import { servicesData } from './data/servicesData';
import './styles/articles.css';

function RouteEffects() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      let target;
      try { target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null; } catch { target = null; }
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  useEffect(() => {
    const article = pathname.startsWith('/artikel/') ? getArticleBySlug(pathname.split('/')[2]) : null;
    const service = pathname.startsWith('/services/') ? servicesData[pathname.split('/')[2]] : null;
    const titles = { '/artikel': 'Berita & Panduan', '/about': 'Tentang Kami', '/services': 'Servis Kami' };
    const title = article?.title || service?.title || titles[pathname] || (pathname.startsWith('/artikel/') ? 'Artikel Tidak Dijumpai' : null);
    document.title = title ? `${title} | Azam Work Construction` : 'Azam Work Construction';
    const description = article?.description || service?.description || (pathname === '/artikel'
      ? 'Panduan aircond dan keselamatan elektrik untuk rumah, kedai dan pejabat di Kelantan. Fahami simptom, baca panduan dan hubungi Azam Work Construction.'
      : 'Azam Work Construction menyediakan perkhidmatan penyaman udara, pendawaian elektrik, CCTV, autogate dan sistem alarm keselamatan untuk kediaman serta premis komersial di Kelantan.');
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:articleSlug" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
