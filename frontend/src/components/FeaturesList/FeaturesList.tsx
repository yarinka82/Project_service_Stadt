// import type { FirmFeatures } from '../../store/firms/firmsSlice';

// import {
//   ANBIETER_ICONS,
//   FEATURE_ICONS,
//   FEATURE_KEYS,
//   FEATURE_LABELS,
//   LANGUAGE_LABELS,
// } from '../../constants/anbieterLabels';

// import css from './FeaturesList.module.css';

// interface FeaturesListProps {
//   features?: FirmFeatures;
//   languages?: string[];
// }

// export default function FeaturesList({
//   features,
//   languages,
// }: FeaturesListProps) {
//   const enabledFeatures = FEATURE_KEYS.filter(
//     (key) => features?.[key] === true
//   );

//   if (!enabledFeatures.length && !languages?.length) {
//     return null;
//   }

//   return (
//     <section className={css.section}>
//       <h2 className={css.title}>Besonderheiten</h2>

//       <ul className={css.list}>
//         {languages && languages.length > 0 && (
//           <li className={css.item}>
//             <img src={ANBIETER_ICONS.language} width={16} height={16} alt="" />

//             <div>
//               <p className={css.label}>Sprachen</p>

//               <p className={css.languages}>
//                 {languages
//                   .map((code) => LANGUAGE_LABELS[code] ?? code)
//                   .join(', ')}
//               </p>
//             </div>
//           </li>
//         )}

//         {enabledFeatures.map((key) => (
//           <li className={css.item} key={key}>
//             <img src={FEATURE_ICONS[key]} width={18} height={18} alt="" />

//             <p className={css.label}>{FEATURE_LABELS[key]}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

import type { FirmFeatures } from '../../store/firms/firmsSlice';

import {
  ANBIETER_ICONS,
  FEATURE_ICONS,
  FEATURE_KEYS,
  FEATURE_LABELS,
  LANGUAGE_LABELS,
} from '../../constants/anbieterLabels';

import css from './FeaturesList.module.css';

interface FeaturesListProps {
  features?: FirmFeatures;
  languages?: string[];
}

export default function FeaturesList({
  features,
  languages,
}: FeaturesListProps) {
  const enabledFeatures = FEATURE_KEYS.filter(
    (key) => features?.[key] === true
  );

  if (!enabledFeatures.length && !languages?.length) {
    return null;
  }

  return (
    <section className={css.section}>
      <h2 className={css.title}>Besonderheiten</h2>

      <ul className={css.list}>
        {languages && languages.length > 0 && (
          <li className={css.item}>
            <img src={ANBIETER_ICONS.language} width={16} height={16} alt="" />

            <div>
              <p className={css.label}>Sprachen</p>

              <p className={css.languages}>
                {languages
                  .map((code) => LANGUAGE_LABELS[code] ?? code)
                  .join(', ')}
              </p>
            </div>
          </li>
        )}

        {enabledFeatures.map((key) => {
          const icon = FEATURE_ICONS[key];

          return (
            <li className={css.item} key={key}>
              {icon && <img src={icon} width={18} height={18} alt="" />}

              <p className={css.label}>{FEATURE_LABELS[key]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
