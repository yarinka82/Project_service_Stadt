import { ContextRow } from '../ContextRow/ContextRow';
import { ViewToggle, type FirmsViewMode } from '../ViewToggle/ViewToggle';

import iconBackArrow from '../../assets/svg/page3/left.svg';

import css from './FirmsPageHeader.module.css';

interface FirmsPageHeaderProps {
  title: string;
  cityName: string;
  resultCount: number;
  categoryIcon?: string;

  mode: FirmsViewMode;

  onBack: () => void;
  onModeChange: (mode: FirmsViewMode) => void;
}

export function FirmsPageHeader({
  title,
  cityName,
  resultCount,
  categoryIcon,
  mode,
  onBack,
  onModeChange,
}: FirmsPageHeaderProps) {
  return (
    <>
      {/* Mobile + Tablet */}
      <div className={css.mobileHeader}>
        <div className={css.mobileTopRow}>
          <div className={css.contextArea}>
            <ContextRow title={title} onBack={onBack} />
          </div>

          <ViewToggle mode={mode} onChange={onModeChange} />
        </div>

        <p className={css.mobileResultCount}>{resultCount} Treffer gefunden</p>
      </div>

      {/* Desktop */}
      <div className={css.desktopHeader}>
        <div className={css.desktopContext}>
          <button
            type="button"
            className={css.desktopBackButton}
            onClick={onBack}
            aria-label="Zurück"
          >
            <img
              src={iconBackArrow}
              alt=""
              aria-hidden="true"
              className={css.backIcon}
            />
          </button>

          {categoryIcon && (
            <div className={css.categoryIconBox}>
              <img
                src={categoryIcon}
                alt=""
                aria-hidden="true"
                className={css.categoryIcon}
              />
            </div>
          )}

          <p className={css.desktopResultCount}>
            {resultCount} Treffer in {cityName} gefunden
          </p>
        </div>

        <ViewToggle mode={mode} onChange={onModeChange} />
      </div>
    </>
  );
}
