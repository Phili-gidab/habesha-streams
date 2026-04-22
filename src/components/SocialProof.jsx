const stats = [
  { number: '10K+', label: 'Downloads' },
  { number: '4.9/5', label: 'App Rating' },
  { number: '135+', label: 'Countries' },
  { number: '99.9%', label: 'Uptime' },
];

const testimonials = [
  {
    quote: "Finally, a streaming platform that truly represents Ethiopian cinema. The quality is incredible and the app works perfectly on my phone.",
    name: 'Yohannes T.',
    role: 'Addis Ababa, Ethiopia',
    initials: 'YT',
  },
  {
    quote: "As an Eritrean living in the diaspora, this app is a lifeline to my culture. Beautiful interface and amazing content library.",
    name: 'Senait M.',
    role: 'Washington DC, USA',
    initials: 'SM',
  },
  {
    quote: "The 4K streaming quality is on par with Netflix. Love the offline download feature for my commute. Worth every penny!",
    name: 'Daniel K.',
    role: 'London, UK',
    initials: 'DK',
  },
];

const SocialProof = () => {
  return (
    <section className="proof" id="proof">
      <div className="container">
        <div className="proof__header">
          <p className="proof__label">Trusted Worldwide</p>
          <h2 className="proof__title">
            Join the <span className="text-gold">Community</span>
          </h2>
        </div>

        <div className="proof__stats">
          {stats.map((s, i) => (
            <div key={i} className="proof__stat">
              <div className="proof__stat-number">{s.number}</div>
              <div className="proof__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="proof__testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="proof__testimonial">
              <div className="proof__testimonial-stars">★★★★★</div>
              <p className="proof__testimonial-quote">"{t.quote}"</p>
              <div className="proof__testimonial-author">
                <div className="proof__testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="proof__testimonial-name">{t.name}</div>
                  <div className="proof__testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
