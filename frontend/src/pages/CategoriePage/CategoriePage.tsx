import { useNavigate, useSearchParams } from 'react-router-dom';
import { ContextRow } from '../../components/ContextRow/ContextRow';
import { SearchField } from '../../components/SearchField/SearchField';
import { CategoryGrid } from '../../components/CategoryGrid/CategoryGrid';
import { BeliebteServices } from '../../components/BeliebteServices/BeliebteServices';
import css from './CategoriePage.module.css';

const CITIES_MAP: Record<string, string> = {
  '1': 'Frankfurt-am-Main',
  '2': 'München',
  '3': 'Würzburg',
};

export default function CategoriePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const aglomerationId = searchParams.get('aglomerationId') || '1';
  const cityName = CITIES_MAP[aglomerationId] || 'Frankfurt-am-Main';

  const handleBack = () => {
    navigate(-1);
  };

  const handleCategoryClick = (categoryId: number | null) => {
     
    // Имя роута согласовать 
    if (categoryId === null) {
      navigate(`/results?aglomerationId=${aglomerationId}`);
    } else {
      navigate(`/results?aglomerationId=${aglomerationId}&categoryId=${categoryId}`);
    }
  };

  return (
    <main className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.contextWrapper}>
          <ContextRow title={cityName} onBack={handleBack} />
        </div>
        
        <div className={css.searchWrapper}>
          <SearchField />
        </div>
        
        <div className={css.gridWrapper}>
          <CategoryGrid onCategoryClick={handleCategoryClick} />
        </div>
        
        <div className={css.beliebteWrapper}>
          <BeliebteServices />
        </div>
      </div>
    </main>
  );
}