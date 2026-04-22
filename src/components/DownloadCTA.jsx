const DownloadCTA = () => {
  return (
    <section className="download" id="download">
      <div className="habesha-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div className="download__content container">
        <div className="download__stars">★ ★ ★ ★ ★</div>
        <h2 className="download__title">
          Start Streaming <span className="gold-shimmer">Today</span>
        </h2>
        <p className="download__subtitle">
          Just <span className="text-gold" style={{ fontWeight: 700, fontSize: 20 }}>$5/month</span>. Cancel anytime.
        </p>
        <p className="download__note">Instant access · No commitments · Available worldwide</p>

        <div className="download__buttons">
          <a href="#" className="hero__btn hero__btn--primary animate-pulse-gold">
            <svg className="hero__btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.638c.478.276.478.965 0 1.24l-2.834 1.639-2.532-2.532 2.532-2.532zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
            </svg>
            <div className="hero__btn-text">
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </div>
          </a>
          <a href="#" className="hero__btn hero__btn--secondary">
            <svg className="hero__btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="hero__btn-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
