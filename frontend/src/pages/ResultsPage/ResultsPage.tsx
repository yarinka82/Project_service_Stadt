import { useNavigate } from 'react-router-dom';
import { ContextRow } from '../../components/ContextRow/ContextRow';
import { ResultsCounter } from '../../components/ResultsCounter/ResultsCounter';
import { CompanyCard } from '../../components/CompanyCard/CompanyCard';
import type { Company } from '../../types/types';
import css from './ResultsPage.module.css';

// Мок-данные (Волна 1). Позже будут приходить с бэкенда.
const MOCK_COMPANIES: Company[] = [
  {
    id: 1,
    title: 'HaarWerk Frankfurt',
    address: 'Frankfurt am Main • Hochstraße 33, 60313',
    description:
      'Seit über 30 Jahren prägt HaarWerk Frankfurt unter Starfriseurin Hatice Nizam den Standard für Luxus im Hairstyling...',
    rating: 4.9,
    reviewsCount: 98,
    priceLevel: '€€',
    category: 'Friseure',
    // imgUrl: пока не передаем, чтобы сработал серый плейсхолдер
  },
  {
    id: 2,
    title: 'CHO Beauty',
    address: 'Frankfurt am Main • Steinweg 7, 60313',
    description:
      'In unserer Beauty Salon verhelfen wir Ihnen zu perfekter Haut, wunderschönen Wimpern oder eindrucksvollen Augenbrauen...',
    rating: 4.8,
    reviewsCount: 175,
    priceLevel: '€€',
    category: 'Friseure',
  },
  {
    id: 3,
    title: 'CHO Beauty',
    address: 'Frankfurt am Main • Steinweg 7, 60313',
    description:
      'In unserer Beauty Salon verhelfen wir Ihnen zu perfekter Haut, wunderschönen Wimpern oder eindrucksvollen Augenbrauen...',
    rating: 4.8,
    reviewsCount: 175,
    priceLevel: '€€',
    category: 'Friseure',
  },
  {
    id: 4,
    title: 'CHO Beauty',
    address: 'Frankfurt am Main • Steinweg 7, 60313',
    description:
      'In unserer Beauty Salon verhelfen wir Ihnen zu perfekter Haut, wunderschönen Wimpern oder eindrucksvollen Augenbrauen...',
    rating: 4.8,
    reviewsCount: 175,
    priceLevel: '€€',
    category: 'Friseure',
  },
];

export default function ResultsPage() {
  const navigate = useNavigate();
  //   const [searchParams] = useSearchParams();

  // НАДО: получить name категории по categoryId из URL
  // для демонстрации хардкодим название.
  const categoryName = 'Friseur';

  const handleBack = () => {
    navigate(-1); // Возврат на предыдущую страницу (Страницу 3)
  };

  return (
    <main className={css.pageContainer}>
      <div className={css.content}>
        {/* 1. Шапка со стрелкой назад */}
        <div className={css.headerWrapper}>
          <ContextRow title={categoryName} onBack={handleBack} />
        </div>

        {/* 2. Счетчик результатов */}
        <div className={css.counterWrapper}>
          <ResultsCounter count={MOCK_COMPANIES.length} />
        </div>

        {/* 3. Вертикальный список карточек (Сетка 1 колонка) */}
        <section className={css.listSection}>
          {MOCK_COMPANIES.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </section>
      </div>
    </main>
  );
}
