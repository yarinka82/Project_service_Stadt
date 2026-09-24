import css from './FirmCard.module.css';

interface FirmCardProps {
  name: string;
  description: string;
  logo: string | null;

  categoryName?: string;
  categoryIcon?: string;

  city?: string;
  street?: string;
  houseNr?: string;
  zip?: string;

  onClick: () => void;
}

export function FirmCard({
  name,
  description,
  logo,
  categoryName,
  categoryIcon,
  city,
  street,
  houseNr,
  zip,
  onClick,
}: FirmCardProps) {
  const descriptionText = description.trim();

  const streetAddress = [street, houseNr].filter(Boolean).join(' ');

  const addressText = [streetAddress, zip].filter(Boolean).join(', ');

  return (
    <article className={css.card} onClick={onClick}>
      <div className={css.imageWrapper}>
        {logo ? (
          <img src={logo} alt="" className={css.image} />
        ) : (
          <div className={css.imagePlaceholder}>Kein Bild verfügbar</div>
        )}

        {categoryName && (
          <div className={css.categoryBadge}>
            {categoryIcon && (
              <img src={categoryIcon} alt="" className={css.categoryIcon} />
            )}

            <span>{categoryName}</span>
          </div>
        )}
      </div>

      <div className={css.content}>
        <h2 className={css.name}>{name}</h2>

        {city && (
          <p className={css.address}>
            <span className={css.locationMarker}>●</span>

            <strong>{city}</strong>

            {addressText && (
              <>
                <span>•</span>
                <span>{addressText}</span>
              </>
            )}
          </p>
        )}

        {descriptionText && (
          <p className={css.description}>{descriptionText}</p>
        )}

        {/*
          Рейтинг и количество отзывов должны быть частью карточки фирмы
        */}
      </div>
    </article>
  );
}
