const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__accent" />
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__brand-link">
            <div className="footer__brand-logo">HS</div>
            <div>
              <span className="footer__brand-name">HABESHA STREAMS</span>
              <span className="footer__brand-tag" style={{ display: 'block' }}>EAST AFRICAN STREAMING</span>
            </div>
          </a>
          <p className="footer__brand-desc">
            The premier East African streaming platform. Discover authentic stories,
            music, and culture from Ethiopia, Eritrea, and beyond — delivered globally.
          </p>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <a href="#">About Habesha Streams</a>
            <a href="mailto:careers@habeshastreams.com">Careers</a>
            <a href="mailto:press@habeshastreams.com">Press & Media</a>
            <a href="mailto:support@habeshastreams.com">Contact Us</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Manage Account</a>
            <a href="#pricing">Subscription Plans</a>
            <a href="mailto:support@habeshastreams.com">Report a Problem</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Connect With Us</h4>
            <div className="footer__social">
              {['IG', 'FB', 'YT', 'TT'].map(s => (
                <a key={s} href="#" className="footer__social-link" aria-label={s}>{s}</a>
              ))}
            </div>
            <a href="mailto:support@habeshastreams.com" className="footer__email">
              ✉ support@habeshastreams.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <p className="footer__copy">© {year} Habesha Streams. All Rights Reserved.</p>
            <p className="footer__legal">
              Habesha Streams is a digital streaming platform providing licensed
              East African film and television content.
            </p>
          </div>
          <div className="footer__status">
            <span className="footer__status-dot" />
            99.9% Uptime
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
