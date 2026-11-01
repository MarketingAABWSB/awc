import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronUp, X } from 'lucide-react';
import '../styles/article-contents.css';

export default function ArticleContents({ article }) {
  const sections = useMemo(() => [
    { id: 'jawapan-pantas', title: 'Jawapan cepat' },
    ...article.sections,
  ], [article]);
  const [activeSection, setActiveSection] = useState('jawapan-pantas');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dialogRef = useRef(null);
  const sidebarLinksRef = useRef(null);
  const scrollLockRef = useRef(null);
  const activeIndex = Math.max(0, sections.findIndex((section) => section.id === activeSection));

  const unlockScroll = useCallback(() => {
    if (scrollLockRef.current === null) return;
    document.documentElement.style.overflowY = scrollLockRef.current;
    scrollLockRef.current = null;
  }, []);

  const closeDrawer = useCallback(() => {
    // Restore scrolling before the router positions the requested article section.
    unlockScroll();
    dialogRef.current?.close();
    setDrawerOpen(false);
  }, [unlockScroll]);

  useEffect(() => {
    closeDrawer();
    let frame;

    const updateCurrentSection = () => {
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 136) current = section.id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateCurrentSection);
    };
    const onResize = () => {
      if (window.innerWidth > 960) closeDrawer();
      onScroll();
    };

    updateCurrentSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      unlockScroll();
    };
  }, [article.slug, sections, closeDrawer, unlockScroll]);

  useEffect(() => {
    const nav = sidebarLinksRef.current;
    const link = nav?.querySelector('[aria-current="location"]');
    if (!nav || !link || !nav.clientHeight) return;
    const bounds = nav.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();
    if (linkBounds.top < bounds.top) nav.scrollTop -= bounds.top - linkBounds.top;
    else if (linkBounds.bottom > bounds.bottom) nav.scrollTop += linkBounds.bottom - bounds.bottom;
  }, [activeSection]);

  const topicLinks = (drawer = false) => sections.map((section, index) => (
    <Link
      key={section.id}
      to={`#${section.id}`}
      className={activeSection === section.id ? 'is-active' : undefined}
      aria-current={activeSection === section.id ? 'location' : undefined}
      onClick={() => {
        if (drawer) closeDrawer();
        setActiveSection(section.id);
      }}
    >
      <span className="article-contents-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <span>{section.title}</span>
    </Link>
  ));

  return (
    <>
      <aside className="article-contents-sidebar" aria-labelledby="article-contents-heading">
        <div className="article-contents-heading">
          <BookOpen size={18} aria-hidden="true" />
          <h2 id="article-contents-heading">Dalam panduan ini</h2>
        </div>
        <nav ref={sidebarLinksRef} className="article-contents-links" aria-label="Isi kandungan artikel">
          {topicLinks()}
        </nav>
        <Link className="article-contents-back" to="/artikel"><ArrowLeft size={15} aria-hidden="true" /> Semua panduan</Link>
      </aside>

      <div className="article-contents-mobile">
        <button
          className="article-contents-trigger"
          type="button"
          aria-haspopup="dialog"
          aria-controls="article-contents-dialog"
          aria-expanded={drawerOpen}
          onClick={() => {
            if (!dialogRef.current || dialogRef.current.open) return;
            scrollLockRef.current = document.documentElement.style.overflowY;
            document.documentElement.style.overflowY = 'hidden';
            dialogRef.current.showModal();
            setDrawerOpen(true);
          }}
        >
          <BookOpen size={18} aria-hidden="true" />
          <span>Isi kandungan</span>
          <span className="article-contents-progress" aria-label={`Topik ${activeIndex + 1} daripada ${sections.length}`}>{activeIndex + 1} / {sections.length}</span>
          <ChevronUp size={17} aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        id="article-contents-dialog"
        className="article-contents-dialog"
        aria-labelledby="article-contents-dialog-title"
        onCancel={unlockScroll}
        onClose={() => {
          unlockScroll();
          setDrawerOpen(false);
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientY < bounds.top || event.clientX < bounds.left || event.clientX > bounds.right || event.clientY > bounds.bottom) closeDrawer();
        }}
      >
        <div className="article-contents-dialog-heading">
          <div>
            <h2 id="article-contents-dialog-title">Isi kandungan</h2>
            <p>Pilih topik untuk terus membaca.</p>
          </div>
          <button type="button" onClick={closeDrawer} aria-label="Tutup isi kandungan" autoFocus><X size={21} aria-hidden="true" /></button>
        </div>
        <nav className="article-contents-links article-contents-dialog-links" aria-label="Topik dalam artikel">
          {topicLinks(true)}
        </nav>
      </dialog>
    </>
  );
}
