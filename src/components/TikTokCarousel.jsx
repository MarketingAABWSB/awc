import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { url: 'https://www.tiktok.com/@azamworkconstruction/video/7675938886710791431', img: '/tiktok1.jpg' },
  { url: 'https://www.tiktok.com/@azamworkconstruction/video/7675939537712876808', img: '/tiktok2.jpg' },
  { url: 'https://www.tiktok.com/@azamworkconstruction/video/7676323639083519233', img: '/tiktok3.jpg' },
  { url: 'https://www.tiktok.com/@azamworkconstruction/video/7676324071671434497', img: '/tiktok4.jpg' }
];

export default function TikTokCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % videos.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? videos.length - 1 : current - 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Navigation Arrows */}
      <button onClick={handlePrev} style={{ position: 'absolute', left: '10px', zIndex: 20, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
        <ChevronLeft size={20} color="#1c1c1c" />
      </button>
      
      <button onClick={handleNext} style={{ position: 'absolute', right: '10px', zIndex: 20, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
        <ChevronRight size={20} color="#1c1c1c" />
      </button>

      {/* Carousel Track */}
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {videos.map((video, idx) => {
          let offset = idx - activeIndex;
          if (offset < -1) offset += videos.length;
          if (offset > 1) offset -= videos.length;

          if (videos.length === 4) {
             if (offset === 2) offset = -2;
          }

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;

          let translateX = '0%';
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;

          if (isPrev) {
            translateX = '-65%';
            scale = 0.8;
            zIndex = 5;
            opacity = 0.5;
          } else if (isNext) {
            translateX = '65%';
            scale = 0.8;
            zIndex = 5;
            opacity = 0.5;
          } else if (!isActive) {
            translateX = offset < 0 ? '-100%' : '100%';
            scale = 0.5;
            zIndex = 1;
            opacity = 0;
          }

          return (
            <a 
              key={idx} 
              href={isActive ? video.url : '#'} 
              target={isActive ? "_blank" : "_self"}
              rel="noopener noreferrer" 
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
              style={{ 
                position: 'absolute', 
                width: '260px', 
                height: '460px', 
                borderRadius: '1rem', 
                overflow: 'hidden', 
                transition: 'all 0.5s ease-in-out',
                transform: `translateX(${translateX}) scale(${scale})`,
                zIndex,
                opacity,
                boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              <img src={video.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="TikTok Video" />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
              
              <div style={{ position: 'absolute', top: '15px', left: '15px', display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 'bold' }}>
                <svg width="20" height="20" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
                @azamworkconstruction
              </div>
              
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid white', marginLeft: '4px' }}></div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div style={{ position: 'absolute', bottom: '-40px', display: 'flex', gap: '8px', justifyContent: 'center', width: '100%' }}>
        {videos.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{ 
              width: idx === activeIndex ? '30px' : '10px', 
              height: '10px', 
              borderRadius: '5px', 
              backgroundColor: idx === activeIndex ? 'var(--primary)' : 'rgba(255,255,255,0.3)', 
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}
