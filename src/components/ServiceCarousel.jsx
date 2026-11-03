import React, { Children, useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/service-carousel.css';

export default function ServiceCarousel({ children, variant = 'cards', 'aria-label': ariaLabel = 'Senarai perkhidmatan' }) {
  const slides = Children.toArray(children);
  const trackRef = useRef(null);
  const trackId = useId();
  const [position, setPosition] = useState({ first: 1, visible: 1, atStart: true, atEnd: slides.length <= 1 });

  useEffect(() => {
    const track = trackRef.current;
    let frame = null;

    const updatePosition = () => {
      frame = null;
      const styles = getComputedStyle(track);
      const visible = Math.min(slides.length, Number(styles.getPropertyValue('--service-carousel-visible')) || 1);
      const step = (track.firstElementChild?.getBoundingClientRect().width || 0) + (parseFloat(styles.columnGap) || 0);
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const first = Math.min(Math.max(1, Math.round(track.scrollLeft / (step || 1)) + 1), Math.max(1, slides.length - visible + 1));

      setPosition({ first, visible, atStart: track.scrollLeft <= 1, atEnd: track.scrollLeft >= maxScroll - 1 });
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    track.addEventListener('scroll', scheduleUpdate, { passive: true });
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(track);
    if (track.firstElementChild) observer.observe(track.firstElementChild);

    return () => {
      track.removeEventListener('scroll', scheduleUpdate);
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [slides.length, variant]);

  const move = (direction) => {
    const track = trackRef.current;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (track.firstElementChild?.getBoundingClientRect().width || 0) + gap;
    const currentIndex = Math.round(track.scrollLeft / (step || 1));
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);

    track.scrollTo({
      left: Math.max(0, Math.min(maxScroll, (currentIndex + direction) * step)),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      if (event.key === 'ArrowLeft' && !position.atStart) move(-1);
      if (event.key === 'ArrowRight' && !position.atEnd) move(1);
    }
  };

  const last = Math.min(slides.length, position.first + position.visible - 1);

  return (
    <div
      className={`service-carousel service-carousel--${variant}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="service-carousel-controls">
        <button
          type="button"
          className="service-carousel-prev"
          aria-label="Servis sebelumnya"
          aria-controls={trackId}
          disabled={position.atStart}
          onClick={() => move(-1)}
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="service-carousel-next"
          aria-label="Servis seterusnya"
          aria-controls={trackId}
          disabled={position.atEnd}
          onClick={() => move(1)}
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      <div id={trackId} className="service-carousel-track" ref={trackRef}>
        {slides.map((child, index) => (
          <div
            className="service-carousel-slide"
            key={child.key ?? index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} daripada ${slides.length}`}
          >
            {child}
          </div>
        ))}
      </div>
      <span className="service-carousel-position" aria-live="polite" aria-atomic="true">
        {slides.length ? (position.first === last ? position.first : `${position.first}–${last}`) : 0} / {slides.length}
      </span>
    </div>
  );
}
