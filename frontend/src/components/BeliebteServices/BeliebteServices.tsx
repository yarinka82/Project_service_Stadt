import css from './BeliebteServices.module.css';
import imgPlaceholderOne from '../../assets/img/photo.jpg';
import imgPlaceholderTwo from '../../assets/img/photo2.jpg';

export const BeliebteServices = () => {
  const mockCards = [
    {
      id: 1,
      title: 'HaarWerk Frankfurt',
      address: 'Frankfurt am Main • Hochstraße 33, 60313',
      desc: 'Seit über 30 Jahren prägt HaarWerk...',
      img: imgPlaceholderOne,
    },
    {
      id: 2,
      title: 'Ivy Salon',
      address: 'Frankfurt am Main • Hochstraße 33, 60313',
      desc: 'Dein Haar — dein Statement...',
      img: imgPlaceholderTwo,
    },
  ];

  return (
    <section className={css.section}>
      <h2 className={css.title}>Beliebte Services</h2>

      <div className={css.cardsGrid}>
        {mockCards.map((card) => (
          <article key={card.id} className={css.card}>
        
            <div className={css.imagePlaceholder}>
              <img src={card.img} alt="" className={css.image} />
              <span className={css.chip}>Friseure</span>
            </div>

            {/* переверстать карточку, когда будут реальные данные */}
            <div className={css.cardBody}>
              <h3 className={css.cardTitle}>{card.title}</h3>
              <p className={css.address}>{card.address}</p>
              <p className={css.desc}>{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
