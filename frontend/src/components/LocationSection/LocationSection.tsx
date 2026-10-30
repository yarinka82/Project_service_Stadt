import { ANBIETER_ICONS } from '../../constants/anbieterLabels';
import css from './LocationSection.module.css';

interface LocationSectionProps {
  address: string;
  city: string;
  mapImage?: string;
}

export default function LocationSection({
  address,
  city,
  mapImage,
}: LocationSectionProps) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Wo befinden wir uns</h2>

      <p className={css.address}>
        <img src={ANBIETER_ICONS.mapPin} width={13} height={13} alt="" />

        <span>{address}</span>
      </p>

      {mapImage ? (
        <figure className={css.figure}>
          <img className={css.map} src={mapImage} alt={`Karte: ${city}`} />
        </figure>
      ) : (
        <p className={css.unavailable}>Karte nicht verfügbar</p>
      )}
    </section>
  );
}
