import { useEffect, useId, useRef, useState } from 'react';
import { Info } from 'lucide-react';
import '../styles/photo-credit.css';

export default function PhotoCredit({ credit }) {
  const creditRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isVisible = !isDismissed && (isHovered || hasFocus || isPinned);

  useEffect(() => {
    setIsHovered(false);
    setHasFocus(false);
    setIsPinned(false);
    setIsDismissed(false);
    const imageWrapper = creditRef.current?.parentElement;
    if (!credit || !imageWrapper) return;

    const handlePointerEnter = (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      setIsHovered(true);
      setIsDismissed(false);
    };
    const handlePointerLeave = (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      setIsHovered(false);
    };
    const handleFocusIn = () => {
      setHasFocus(true);
      setIsDismissed(false);
    };
    const handleFocusOut = (event) => {
      if (imageWrapper.contains(event.relatedTarget)) return;
      setHasFocus(false);
      setIsPinned(false);
    };
    const handleEscape = (event) => {
      if (event.key !== 'Escape' || buttonRef.current?.getAttribute('aria-expanded') !== 'true') return;
      event.preventDefault();
      if (imageWrapper.contains(document.activeElement)) {
        buttonRef.current?.focus({ preventScroll: true });
      }
      setIsPinned(false);
      setIsDismissed(true);
    };
    const handleOutsidePointer = (event) => {
      if (imageWrapper.contains(event.target)) return;
      setIsPinned(false);
      setIsDismissed(true);
    };

    imageWrapper.addEventListener('pointerenter', handlePointerEnter);
    imageWrapper.addEventListener('pointerleave', handlePointerLeave);
    imageWrapper.addEventListener('focusin', handleFocusIn);
    imageWrapper.addEventListener('focusout', handleFocusOut);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('pointerdown', handleOutsidePointer);

    return () => {
      imageWrapper.removeEventListener('pointerenter', handlePointerEnter);
      imageWrapper.removeEventListener('pointerleave', handlePointerLeave);
      imageWrapper.removeEventListener('focusin', handleFocusIn);
      imageWrapper.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('pointerdown', handleOutsidePointer);
    };
  }, [credit]);

  if (!credit) return null;

  const toggleCredit = () => {
    setIsDismissed(isPinned);
    setIsPinned(!isPinned);
  };

  return (
    <div ref={creditRef} className="service-photo-credit">
      <button
        ref={buttonRef}
        type="button"
        className="service-photo-credit-toggle"
        aria-label="Kredit gambar"
        aria-expanded={isVisible}
        aria-controls={panelId}
        onClick={toggleCredit}
      >
        <Info size={15} aria-hidden="true" />
      </button>
      <small id={panelId} className="service-photo-credit-panel" hidden={!isVisible}>
        <a href={credit.source} target="_blank" rel="noopener noreferrer">{credit.attribution || credit.author}</a>
        {' · '}
        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.license}</a>
        <span>Saiz diubah; dipangkas untuk paparan.</span>
      </small>
    </div>
  );
}
