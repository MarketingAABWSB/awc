import React, { useEffect } from 'react';
import { Wind, Zap, Shield, Fence, BellRing, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import PhotoCredit from '../components/PhotoCredit';
import '../styles/services-overview.css';

const serviceIcons = { aircond: Wind, wiring: Zap, cctv: Shield, autogate: Fence, alarm: BellRing };

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-overview">
      <header className="services-overview-header">
        <div className="container">
          <h1>Servis Kami</h1>
          <p>
            Penyelesaian utiliti dan teknikal yang komprehensif, merangkumi pemasangan, penyelenggaraan, dan pembaikan untuk premis anda.
          </p>
        </div>
      </header>

      <div className="services-overview-list container">
        {Object.values(servicesData).map((service, index) => {
          const Icon = serviceIcons[service.id];

          return (
            <article key={service.id} className={`service-overview-row${index % 2 ? ' service-overview-row--reverse' : ''}`} aria-labelledby={`overview-${service.id}`}>
              <div className="service-overview-photo">
                <img src={service.image} alt={service.title} loading={index === 0 ? 'eager' : 'lazy'} />
                <PhotoCredit credit={service.imageCredit} />
              </div>
              <div className="service-overview-content">
                <div className="service-overview-icon"><Icon size={23} aria-hidden="true" /></div>
                <span className="service-overview-eyebrow">SERVIS</span>
                <h2 id={`overview-${service.id}`}>{service.title}</h2>
                <p>{service.summary}</p>
                <Link to={`/services/${service.id}`} className="service-overview-link" aria-label={`Lebih lanjut tentang ${service.title}`}>
                  LEBIH LANJUT <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
