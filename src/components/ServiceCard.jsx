import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhotoCredit from './PhotoCredit';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} loading="lazy" />
        <PhotoCredit credit={service.imageCredit} />
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link to={`/services/${service.id}`} className="service-more-link" aria-label={`Lebih lanjut tentang ${service.title}`}>
          LEBIH LANJUT <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
