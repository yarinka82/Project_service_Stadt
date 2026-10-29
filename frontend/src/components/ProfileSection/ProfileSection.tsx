import css from './ProfileSection.module.css';

interface ProfileSectionProps {
  description: string;
}

export default function ProfileSection({ description }: ProfileSectionProps) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Profil</h2>

      <p className={css.description}>{description}</p>

      {/*
        Weitere Informationen — когда потребуется раскрытие описания.
        Раздел Preise — после появления данных о ценах.
      */}
    </section>
  );
}
