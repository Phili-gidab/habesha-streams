const planFeatures = [
  'Access to full streaming library',
  'Up to 4K Ultra HD quality',
  'Stream on up to 5 devices',
  'Native Android & iOS apps',
  'Download to watch offline',
  'East African cinema & TV',
  'Dolby Atmos Audio',
  'Early access to new releases',
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="habesha-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="pricing__header">
          <p className="pricing__label">Simple Pricing</p>
          <h2 className="pricing__title">
            One Plan. <span className="text-gold">Full Access.</span>
          </h2>
          <p className="pricing__subtitle">No hidden fees. No commitments. Cancel anytime.</p>
        </div>

        <div className="pricing__card">
          <span className="pricing__card-badge">FULL ACCESS</span>
          <div className="pricing__icon">⭐</div>
          <h3 className="pricing__plan-name">Habesha Streams</h3>
          <p className="pricing__plan-desc">Everything you need. One price.</p>
          <div className="pricing__price">
            <span className="pricing__price-amount">$5</span>
            <span className="pricing__price-period">/month</span>
          </div>
          <p className="pricing__billing">Billed monthly · Cancel anytime</p>

          <ul className="pricing__features">
            {planFeatures.map((f, i) => (
              <li key={i}>
                <span className="pricing__check">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <a href="#download" className="pricing__cta">
            Download & Start Streaming →
          </a>
        </div>

        <div className="pricing__trust">
          {[
            { icon: '🔒', text: 'Secured by Stripe' },
            { icon: '⭐', text: '4.9/5 Rating' },
            { icon: '✓', text: 'Cancel Anytime' },
          ].map((b, i) => (
            <div key={i} className="pricing__trust-item">
              <span className="pricing__trust-icon">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
