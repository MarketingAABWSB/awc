import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, ChevronRight, Search, ShieldCheck, Wind, X, Zap } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import GuideEnquiry from '../components/GuideEnquiry';
import { articles } from '../data/articles';

const categories = [
  { id: 'semua', label: 'Semua Artikel' },
  { id: 'aircond', label: 'Tips Aircond' },
  { id: 'elektrik', label: 'Keselamatan Elektrik' },
];

const symptoms = [
  { label: 'Aircond tak sejuk', description: 'Fahami kemungkinan punca.', categoryId: 'aircond', section: 'punca' },
  { label: 'Aircond bocor air', description: 'Apa yang perlu diperhatikan?', categoryId: 'aircond', section: 'air-bocor' },
  { label: 'Servis biasa atau overhaul?', description: 'Kenali perbezaan skop servis.', categoryId: 'aircond', section: 'jenis-servis' },
  { label: 'Elektrik kerap trip', description: 'Mulakan dengan langkah selamat.', categoryId: 'elektrik', section: 'sebab-trip' },
  { label: 'Plug panas atau bau hangit', description: 'Kenali tanda yang berbahaya.', categoryId: 'elektrik', section: 'plug-panas' },
  { label: 'Trip bila aircond dihidupkan', description: 'Bila pemeriksaan diperlukan?', categoryId: 'elektrik', section: 'trip-aircond' },
];

export default function Articles() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(() => categories.some((item) => item.id === searchParams.get('kategori')) ? searchParams.get('kategori') : 'semua');
  const [query, setQuery] = useState('');
  const search = query.trim().toLocaleLowerCase('ms');
  const filteredArticles = articles.filter((article) => {
    const searchableText = [article.title, article.description, article.category, ...article.sections.map((section) => `${section.title} ${section.html.replace(/<[^>]*>/g, ' ')}`)].join(' ').toLocaleLowerCase('ms');
    return (category === 'semua' || article.categoryId === category) && (!search || searchableText.includes(search));
  });

  const resetFilters = () => { setCategory('semua'); setQuery(''); };

  return (
    <main className="articles-page">
      <section className="articles-hero">
        <div className="container">
          <nav className="articles-breadcrumb" aria-label="Jejak halaman"><Link to="/">Laman Utama</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">Berita & Panduan</span></nav>
          <div className="articles-hero-layout">
            <div>
              <span className="articles-eyebrow">PUSAT PANDUAN AWC</span>
              <h1>Berita & Panduan<span>Faham dahulu.<br />Jaga dengan yakin.</span></h1>
              <p>Aircond buat hal atau elektrik asyik trip? Temui panduan mudah untuk memahami masalah dan membuat keputusan yang lebih baik untuk rumah serta premis anda.</p>
              <div className="articles-hero-actions"><Link to="#senarai-artikel" className="articles-button">Terokai Artikel <ArrowRight size={18} aria-hidden="true" /></Link><Link to="#pilih-masalah" className="articles-text-link">Cari Masalah Saya <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            </div>
            <div className="articles-hero-feature">
              <img src="/AC1.jpeg" alt="Kerja servis penyaman udara oleh pasukan AWC" fetchPriority="high" />
              <div className="articles-feature-caption"><span><BookOpen size={18} aria-hidden="true" /> ILMU UNTUK KESELESAAN ANDA</span><p>Dari tanda awal<br />ke langkah seterusnya.</p></div>
              <span className="articles-feature-badge"><ShieldCheck size={19} aria-hidden="true" />Utamakan keselamatan</span>
            </div>
          </div>
          <div className="articles-hero-topics"><span><Wind size={17} aria-hidden="true" /> Penjagaan Aircond</span><span><Zap size={17} aria-hidden="true" /> Keselamatan Elektrik</span><span><BookOpen size={17} aria-hidden="true" /> Bahasa Mudah Difahami</span></div>
        </div>
      </section>

      <section id="senarai-artikel" className="section articles-library" aria-labelledby="articles-heading">
        <div className="container">
          <div className="articles-section-header">
            <div><span className="articles-eyebrow">BACA & KENALI</span><h2 id="articles-heading">Panduan untuk anda</h2><p>Jawapan kepada persoalan biasa tentang aircond dan elektrik.</p></div>
            <div className="articles-search"><Search size={19} aria-hidden="true" /><label className="visually-hidden" htmlFor="article-search">Cari artikel</label><input id="article-search" type="search" placeholder="Cari topik atau masalah…" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <button type="button" onClick={() => setQuery('')} aria-label="Kosongkan carian"><X size={17} aria-hidden="true" /></button>}</div>
          </div>
          <div className="articles-filter-row"><div className="articles-filters" role="group" aria-label="Kategori artikel">{categories.map((item) => <button key={item.id} type="button" className={category === item.id ? 'selected' : ''} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div><p className="articles-result-count" role="status">{filteredArticles.length} artikel</p></div>
          {filteredArticles.length > 0 ? <div className="articles-grid">{filteredArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="articles-empty"><Search size={30} aria-hidden="true" /><h3>Tiada artikel ditemui</h3><p>Cuba kata kunci lain atau lihat semua panduan yang tersedia.</p><button type="button" className="articles-button" onClick={resetFilters}>Lihat Semua Artikel <ArrowRight size={17} aria-hidden="true" /></button></div>}
        </div>
      </section>

      <section id="pilih-masalah" className="section guide-topics" aria-labelledby="guide-topics-heading">
        <div className="container">
          <div className="articles-section-header"><div><span className="articles-eyebrow">MULA DENGAN SIMPTOM</span><h2 id="guide-topics-heading">Apa yang sedang berlaku?</h2><p>Tak perlu tahu istilah teknikal. Pilih keadaan yang paling dekat dengan masalah anda.</p></div></div>
          <div className="guide-topic-grid">{symptoms.map((symptom) => {
            const article = articles.find((item) => item.categoryId === symptom.categoryId);
            const TopicIcon = symptom.categoryId === 'aircond' ? Wind : Zap;
            return <Link className="guide-topic" to={`/artikel/${article.slug}#${symptom.section}`} key={symptom.label}><span className={`guide-topic-icon ${symptom.categoryId}`}><TopicIcon size={22} aria-hidden="true" /></span><div><h3>{symptom.label}</h3><p>{symptom.description}</p></div><ArrowUpRight size={19} aria-hidden="true" /></Link>;
          })}</div>
        </div>
      </section>
      <GuideEnquiry />
    </main>
  );
}
