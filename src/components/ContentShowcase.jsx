import thumb1 from '../assets/thumb-1.jpg';
import thumb2 from '../assets/thumb-2.jpg';
import thumb3 from '../assets/thumb-3.jpg';
import thumb4 from '../assets/thumb-4.jpg';
import thumb5 from '../assets/thumb-5.jpg';
import thumb6 from '../assets/thumb-6.jpg';
import thumb7 from '../assets/thumb-7.jpg';
import thumb8 from '../assets/thumb-8.jpg';

const cards = [
  { img: thumb1, badge: 'NEW' },
  { img: thumb2, badge: null },
  { img: thumb3, badge: 'NEW' },
  { img: thumb4, badge: null },
  { img: thumb5, badge: 'PPV' },
  { img: thumb6, badge: null },
  { img: thumb7, badge: 'NEW' },
  { img: thumb8, badge: null },
];

const categories = ['Movies', 'Series', 'Music', 'Documentaries', 'Live Events', 'Short Films'];

const ContentShowcase = () => {
  const doubled = [...cards, ...cards];

  return (
    <section className="showcase" id="content">
      <div className="container">
        <div className="showcase__header reveal">
          <p className="showcase__label">Explore Our Library</p>
          <h2 className="showcase__title">
            Discover <span className="text-gold">Authentic Stories</span>
          </h2>
          <p className="showcase__subtitle">
            From gripping Ethiopian dramas to Eritrean documentaries, live concerts, 
            and exclusive premieres — all in one app.
          </p>
          <div className="showcase__categories">
            {categories.map((c, i) => (
              <span key={c} className={`showcase__cat ${i === 0 ? 'showcase__cat--active' : ''}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ overflow: 'hidden', padding: '20px 0' }}>
        <div className="showcase__scroll">
          {doubled.map((card, i) => (
            <div key={i} className="showcase__card">
              <img src={card.img} alt="Content thumbnail" loading="lazy" />
              <div className="showcase__card-overlay" />
              {card.badge && (
                <span className={`showcase__card-badge ${
                  card.badge === 'NEW' ? 'showcase__card-badge--new' : 'showcase__card-badge--ppv'
                }`}>
                  {card.badge}
                </span>
              )}
              <div className="showcase__card-play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
