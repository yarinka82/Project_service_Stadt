// import { formatRating } from '../../utils/openingHours';
// import css from './AnbieterStats.module.css';

// interface AnbieterStatsProps {
//   rating?: number;
//   reviewCount?: number;
//   priceFrom?: number;
// }

// export default function AnbieterStats({
//   rating,
//   reviewCount,
//   priceFrom,
// }: AnbieterStatsProps) {
//   const filledStars =
//     rating !== undefined ? Math.max(0, Math.min(5, Math.round(rating))) : 0;

//   return (
//     <div className={css.stats}>
//       <div className={css.column}>
//         {rating !== undefined ? (
//           <>
//             <p
//               className={css.value}
//               aria-label={`${formatRating(rating)} von 5 Sternen`}
//             >
//               {formatRating(rating)}
//             </p>

//             <span className={css.stars} aria-hidden="true">
//               {'★'.repeat(filledStars)}
//               {'☆'.repeat(5 - filledStars)}
//             </span>
//           </>
//         ) : (
//           <p className={css.label}>
//             Noch keine
//             <br />
//             Bewertungen
//           </p>
//         )}
//       </div>

//       <div className={css.column}>
//         <p className={css.value}>{reviewCount ?? 0}</p>
//         <p className={css.label}>Bewertungen</p>
//       </div>

//       <div className={css.column}>
//         {priceFrom !== undefined ? (
//           <>
//             <p className={css.price}>
//               ab <strong>{priceFrom.toLocaleString('de-DE')}</strong>{' '}
//               <span>€</span>
//             </p>

//             <p className={css.label}>Preis</p>
//           </>
//         ) : (
//           <p className={css.price}>Preis auf Anfrage</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { ANBIETER_ICONS } from '../../constants/anbieterLabels';
import { formatRating } from '../../utils/openingHours';

import css from './AnbieterStats.module.css';

interface AnbieterStatsProps {
  rating?: number;
  reviewCount?: number;
  priceFrom?: number;
}

export default function AnbieterStats({
  rating,
  reviewCount,
  priceFrom,
}: AnbieterStatsProps) {
  const filledStars =
    rating !== undefined ? Math.max(0, Math.min(5, Math.round(rating))) : 0;

  return (
    <div className={css.stats}>
      <div className={css.column}>
        {rating !== undefined ? (
          <>
            <p
              className={css.value}
              aria-label={`${formatRating(rating)} von 5 Sternen`}
            >
              {formatRating(rating)}
            </p>

            <div className={css.stars} aria-hidden="true">
              {[0, 1, 2, 3, 4].map((index) => (
                <img
                  key={index}
                  src={
                    index < filledStars
                      ? ANBIETER_ICONS.starFilled
                      : ANBIETER_ICONS.starEmpty
                  }
                  width={9}
                  height={9}
                  alt=""
                />
              ))}
            </div>
          </>
        ) : (
          <p className={css.label}>
            Noch keine
            <br />
            Bewertungen
          </p>
        )}
      </div>

      <div className={css.column}>
        <p className={css.value}>{reviewCount ?? 0}</p>
        <p className={css.label}>Bewertungen</p>
      </div>

      <div className={css.column}>
        {priceFrom !== undefined ? (
          <>
            <p className={css.price}>
              ab <strong>{priceFrom.toLocaleString('de-DE')}</strong>{' '}
              <span>€</span>
            </p>

            <p className={css.label}>Preis</p>
          </>
        ) : (
          <p className={css.price}>Preis auf Anfrage</p>
        )}
      </div>
    </div>
  );
}
