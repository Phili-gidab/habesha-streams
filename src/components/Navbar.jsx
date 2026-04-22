import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Content', href: '#content' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar__brand">
        <div className="navbar__logo">HS</div>
        <span className="navbar__name">HABESHA STREAMS</span>
      </a>
      <div className="navbar__links">
        {links.map(l => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <a href="#download" className="navbar__cta">Download App</a>
      <button
        className="navbar__mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 60, background: 'rgba(10,8,4,0.97)',
          backdropFilter: 'blur(20px)', zIndex: 99, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ color: '#f5f1e8', fontSize: 20, fontFamily: 'Cinzel, serif', fontWeight: 700 }}>
              {l.label}
            </a>
          ))}
          <a href="#download" onClick={() => setMobileOpen(false)} className="navbar__cta" style={{ marginTop: 16 }}>
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
