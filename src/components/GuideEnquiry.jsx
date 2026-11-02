import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GuideEnquiry() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const previewRef = useRef(null);

  useEffect(() => {
    if (!message) return;
    previewRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'nearest',
    });
  }, [message]);

  const prepareMessage = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const location = String(form.get('lokasi') || '').trim();
    const symptom = String(form.get('simptom') || '').trim();
    if (!location || !symptom) {
      setError('Sila nyatakan lokasi dan masalah anda.');
      return;
    }
    const units = String(form.get('unit') || '').trim();
    setMessage([
      'Salam Azam Work Construction, saya ingin membuat pertanyaan.',
      '',
      `Jenis pertanyaan: ${form.get('kategori')}`,
      `Lokasi: ${location}`,
      ...(units ? [`Bilangan unit: ${units}`] : []),
      `Masalah: ${symptom}`,
      '',
      'Boleh semak kawasan liputan, cadangan pemeriksaan dan slot janji temu yang tersedia? Terima kasih.',
    ].join('\n'));
    setError('');
    setStatus('');
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setStatus('Mesej disalin.');
    } catch {
      setStatus('Pilih dan salin teks mesej di atas secara manual.');
    }
  };

  return (
    <section id="bantuan" className="guide-enquiry section" aria-labelledby="enquiry-heading">
      <div className="container guide-enquiry-layout">
        <div className="guide-enquiry-intro">
          <span className="articles-eyebrow">LANGKAH SETERUSNYA</span>
          <h2 id="enquiry-heading">Nak tanya juruteknik?<br /><span>Kami mudahkan.</span></h2>
          <p>Ceritakan keadaan anda. Kami susunkan mesej supaya pertanyaan tentang pemeriksaan, servis dan janji temu lebih jelas.</p>
          <div className="guide-enquiry-note"><MessageCircle size={22} aria-hidden="true" /><p>Semak mesej dahulu, kemudian pilih untuk membukanya di WhatsApp. Borang ini tidak menghantar mesej secara automatik.</p></div>
          <Link to="/services" className="articles-text-link">Kenali Servis Kami <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <form className="guide-enquiry-form" onSubmit={prepareMessage} onChange={() => { setMessage(''); setStatus(''); setError(''); }}>
          <h3>Cerita sikit masalah anda</h3>
          <div className="guide-form-row">
            <label>Jenis pertanyaan
              <select name="kategori" defaultValue="Masalah aircond">
                <option>Masalah aircond</option>
                <option>Servis beberapa unit aircond</option>
                <option>Pemasangan aircond</option>
                <option>Pertanyaan berkaitan elektrik</option>
              </select>
            </label>
            <label>Bilangan unit <span>(jika ada)</span>
              <input name="unit" placeholder="Contoh: 2 unit" maxLength={40} />
            </label>
          </div>
          <label>Lokasi / kawasan <span>(wajib)</span>
            <input name="lokasi" required placeholder="Contoh: Kubang Kerian, Kota Bharu" maxLength={120} autoComplete="address-level2" />
          </label>
          <label>Apa yang berlaku? <span>(wajib)</span>
            <textarea name="simptom" required rows={3} placeholder="Contoh: Aircond bilik hidup, tapi sudah 3 hari tak sejuk…" maxLength={1200} />
          </label>
          {error && <p className="guide-form-error" role="alert">{error}</p>}
          <button type="submit" className="articles-button">Sediakan Mesej <ArrowUpRight size={18} aria-hidden="true" /></button>
        </form>
        {message && (
          <div ref={previewRef} className="guide-message-preview" role="region" aria-label="Mesej pertanyaan anda" aria-live="polite">
            <label>Semak mesej anda<textarea readOnly value={message} rows={8} /></label>
            <div className="guide-message-controls">
              <div className="guide-message-actions">
                <a className="articles-button" href={`https://wa.me/60177079747?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Buka WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a>
                <button type="button" className="articles-text-link" onClick={copyMessage}>{status === 'Mesej disalin.' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}Salin Mesej</button>
              </div>
              <p className="guide-form-status" role="status">{status}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
