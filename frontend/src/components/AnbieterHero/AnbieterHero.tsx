import { ANBIETER_ICONS } from '../../constants/anbieterLabels';
import css from './AnbieterHero.module.css';

interface AnbieterHeroProps {
  photo: string | null;
  onBack: () => void;
}

export default function AnbieterHero({ photo, onBack }: AnbieterHeroProps) {
  return (
    <div className={css.hero}>
      {photo ? (
        <img className={css.photo} src={photo} alt="" />
      ) : (
        <p className={css.placeholder}>Kein Bild verfügbar</p>
      )}

      <button
        className={css.backButton}
        type="button"
        aria-label="Zurück"
        onClick={onBack}
      >
        <img src={ANBIETER_ICONS.back} width={24} height={24} alt="" />
      </button>

      {/*
        Стрелка перелистывания и индикаторы отображаются
        только при галерее из нескольких фото.
        Сейчас у фирмы одно фото.
      */}
    </div>
  );
}
