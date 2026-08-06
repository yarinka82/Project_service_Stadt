import styles from './BeliebteServices.module.css';
// import imgPlaceholder from '../../assets/img/page3.jpg'; 

export const BeliebteServices = () => {
  const mockCards = [
    { id: 1, title: 'HaarWerk Frankfurt', address: 'Frankfurt am Main • Hochstraße 33, 60313', desc: 'Seit über 30 Jahren prägt HaarWerk...' },
    { id: 2, title: 'Ivy Salon', address: 'Frankfurt am Main • Hochstraße 33, 60313', desc: 'Dein Haar — dein Statement...' }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Beliebte Services</h2>
      
      <div className={styles.cardsGrid}>
        {mockCards.map(card => (
          <article key={card.id} className={styles.card}>
            {/* серый блок 150px, чтобы сборка не падала без .jpg */}
            <div className={styles.imagePlaceholder}>
              <span className={styles.chip}>Friseure</span>
            </div>
            
            {/* переверстать карточку, когда будут реальные данные */}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.address}>{card.address}</p>
              <p className={styles.desc}>{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};