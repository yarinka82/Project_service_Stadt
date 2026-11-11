import type { FirmListItem } from '../../store/firms/firmsSlice';
import { CATEGORY_ICONS } from '../../constants/categoryIcons';
import { FirmCard } from '../FirmCard/FirmCard';
import css from './FirmsGrid.module.css';

interface FirmsGridProps {
  firms: FirmListItem[];
  // Возвращает адрес страницы фирмы для ссылки на карточке
  getFirmHref: (firmId: string) => string;
}

export function FirmsGrid({ firms, getFirmHref }: FirmsGridProps) {
  return (
    <div className={css.grid}>
      {firms.map((firm) => {
        // Категория по требованиям обязательна,но проверяем массив, чтобы плохие данные не сломали страницу.
        const category = firm.categories[0];

        // Адрес на карточке может отсутствовать.
        const address = firm.addresses[0];

        return (
          <FirmCard
            key={firm.id}
            name={firm.name}
            description={firm.description}
            logo={firm.logo}
            categoryName={category?.name}
            categoryIcon={category ? CATEGORY_ICONS[category.id] : undefined}
            city={address?.city}
            street={address?.street}
            houseNr={address?.houseNr}
            zip={address?.zip}
            to={getFirmHref(firm.id)}
          />
        );
      })}
    </div>
  );
}
