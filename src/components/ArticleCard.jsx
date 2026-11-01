import { ArrowUpRight, Clock3, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article, compact = false }) {
  const TopicIcon = article.categoryId === 'aircond' ? Wind : Zap;

  return (
    <article className={`article-card${compact ? ' article-card-compact' : ''}`}>
      <Link to={`/artikel/${article.slug}`} className="article-card-link">
        <div className="article-card-image">
          <img src={article.image} alt={article.imageAlt} loading="lazy" decoding="async" />
        </div>
        <div className="article-card-body">
          <div className="article-card-meta">
            <span className="article-card-category"><TopicIcon size={13} aria-hidden="true" />{article.category}</span>
            <span className="article-card-time"><Clock3 size={13} aria-hidden="true" />{article.readingMinutes} minit bacaan</span>
          </div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <div className="article-card-bottom">
            <span>Baca Selanjutnya</span>
            <span className="article-card-arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
