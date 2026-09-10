import type { Company } from '../../types/types';
import css from './CompanyCard.module.css';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <article className={css.card}>
      {/* Верхняя часть (Фото + Чип) */}
      <div className={css.imageWrapper}>
        {company.imgUrl ? (
          <img src={company.imgUrl} alt="" className={css.image} />
        ) : (
          <div className={css.imagePlaceholder} />
        )}
        <span className={css.chip}>{company.category}</span>
      </div>

      {/* Нижняя часть (Информация) */}
      <div className={css.cardBody}>
        <h3 className={css.title}>{company.title}</h3>
        <p className={css.address}>{company.address}</p>
        <p className={css.description}>{company.description}</p>

        {/* Футер карточки (Рейтинг + Отзывы/Цена) */}
        <div className={css.footer}>
          <span className={css.rating}>
            {/* TODO: заменить на иконку звезды из Figma */}★{' '}
            {company.rating.toFixed(1)}
          </span>
          <span className={css.meta}>
            {company.reviewsCount} Bewertungen • {company.priceLevel}
          </span>
        </div>
      </div>
    </article>
  );
};
