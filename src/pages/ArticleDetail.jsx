import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, Clock3, MessageCircle, ShieldCheck } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import ArticleContents from '../components/ArticleContents';
import { articles, getArticleBySlug } from '../data/articles';
import '../styles/article-detail.css';

// Keep native FAQ state intact when the contents menu updates during scrolling.
const ArticleSection = memo(function ArticleSection({ section }) {
  return (
    <section className="article-prose-section" id={section.id} aria-labelledby={`heading-${section.id}`}>
      <h2 id={`heading-${section.id}`}>{section.title}</h2>
      {/* Only trusted HTML adapted from the supplied, repository-owned articles is rendered here. */}
      <div className="article-prose" dangerouslySetInnerHTML={{ __html: section.html }} />
    </section>
  );
});

export default function ArticleDetail() {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug);

  if (!article) {
    return (
      <main className="article-page article-missing" lang="ms">
        <meta name="robots" content="noindex" />
        <div className="container">
          <BookOpen size={42} aria-hidden="true" />
          <p className="article-eyebrow">BERITA & PANDUAN</p>
          <h1>Panduan ini belum tersedia.</h1>
          <p>Pautan mungkin telah berubah. Anda boleh meneroka panduan aircond dan keselamatan elektrik kami.</p>
          <Link className="btn btn-primary" to="/artikel"><ArrowLeft size={18} aria-hidden="true" /> Lihat semua panduan</Link>
        </div>
      </main>
    );
  }

  const relatedArticle = articles.find((item) => item.slug !== article.slug);
  const serviceLabel = article.serviceId === 'aircond' ? 'servis aircond' : 'pendawaian elektrik';
  const whatsappUrl = `https://wa.me/60177079747?text=${encodeURIComponent(`Salam AWC, saya membaca panduan ${article.shortTitle} dan ingin bertanya tentang ${serviceLabel}. Lokasi saya: `)}`;

  return (
    <main className="article-page" lang="ms">
      <header className="article-detail-header">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="Jejak halaman">
            <Link to="/">Laman utama</Link><ChevronRight size={14} aria-hidden="true" />
            <Link to="/artikel">Berita & Panduan</Link><ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{article.category}</span>
          </nav>
          <div className="article-header-layout">
            <div className="article-header-copy">
              <div className="article-detail-meta">
                <Link to={`/artikel?kategori=${article.categoryId}`} className="article-detail-category">{article.category}</Link>
                <span><Clock3 size={16} aria-hidden="true" /> {article.readingMinutes} minit bacaan</span>
              </div>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
            <div className="article-cover">
              <img src={article.image} alt={article.imageAlt} fetchPriority="high" />
            </div>
          </div>
        </div>
      </header>

      <div className="container article-reading-layout">
        <ArticleContents key={article.slug} article={article} />

        <article className="article-reading-content" aria-label={article.title}>
          <p className="article-intro">{article.intro}</p>
          <section className="article-quick-answer" id="jawapan-pantas" aria-labelledby="quick-answer-title">
            <span className="article-eyebrow">MULA DI SINI</span>
            <h2 id="quick-answer-title">Jawapan cepat</h2>
            <p>{article.quickAnswer}</p>
          </section>

          {article.sections.map((section) => <ArticleSection section={section} key={`${article.slug}-${section.id}`} />)}

          <section className="article-prose-section" aria-labelledby="article-sources-title">
            <h2 id="article-sources-title">Rujukan teknikal</h2>
            <div className="article-prose">
              <ul>
                {article.sources.map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>
                ))}
              </ul>
            </div>
          </section>

          <div className="article-safety-note">
            <ShieldCheck size={24} aria-hidden="true" />
            <div><strong>Utamakan keselamatan.</strong><p>Panduan ini membantu anda memahami masalah. Pemeriksaan teknikal diperlukan untuk mengesahkan puncanya. Gangguan bekalan TNB: <a href="tel:15454">15454</a>. Kecemasan: <a href="tel:999">999</a>.</p></div>
          </div>

          <section className="article-service-cta" aria-labelledby="article-service-title">
            <span className="article-eyebrow">BANTUAN SETERUSNYA</span>
            <h2 id="article-service-title">Perlukan bantuan dengan {serviceLabel}?</h2>
            <p>Kongsikan lokasi dan simptom yang anda alami. Pasukan AWC boleh membantu anda menyemak skop servis dan langkah seterusnya.</p>
            <div className="article-service-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Tanya AWC di WhatsApp</a>
              <Link to={`/services/${article.serviceId}`} className="article-service-link">Lihat perkhidmatan <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </section>

          {relatedArticle && (
            <section className="article-related" aria-labelledby="article-related-title">
              <p className="article-eyebrow">BACAAN SETERUSNYA</p>
              <h2 id="article-related-title">Teruskan membaca</h2>
              <ArticleCard article={relatedArticle} compact />
            </section>
          )}
        </article>
      </div>
    </main>
  );
}
