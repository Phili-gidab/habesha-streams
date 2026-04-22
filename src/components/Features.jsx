const features = [
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    desc: 'DRM protected, encrypted streams with dynamic watermarking and anti-piracy technology to protect creators.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    desc: 'Stream from anywhere in the world with our global CDN delivering ultra-fast, buffer-free playback.',
  },
  {
    icon: '📱',
    title: 'All Your Devices',
    desc: 'Native Android & iOS apps plus web access. Seamless experience on every screen you own.',
  },
  {
    icon: '🎬',
    title: '4K Cinematic Quality',
    desc: 'Adaptive streaming up to 4K HDR with Dolby Audio for the ultimate cinematic viewing experience.',
  },
  {
    icon: '📥',
    title: 'Offline Downloads',
    desc: 'Download your favorite content and watch offline — perfect for on-the-go viewing without WiFi.',
  },
  {
    icon: '🎭',
    title: 'Live Events & PPV',
    desc: 'Access exclusive live-streamed events, concerts, and pay-per-view premieres from top creators.',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features__header">
          <p className="features__label">Why Habesha Streams</p>
          <h2 className="features__title">
            Built for the <span className="text-gold">World</span>
          </h2>
        </div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
