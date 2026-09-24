import css from './ViewToggle.module.css';

export type FirmsViewMode = 'list' | 'map';

interface ViewToggleProps {
  mode: FirmsViewMode;
  onChange: (mode: FirmsViewMode) => void;
}

export function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className={css.toggle} role="group" aria-label="Ansicht auswählen">
      <button
        type="button"
        className={`${css.button} ${mode === 'list' ? css.active : ''}`}
        onClick={() => onChange('list')}
      >
        <span className={css.icon} aria-hidden="true">
          ☷
        </span>
        Liste
      </button>

      <button
        type="button"
        className={`${css.button} ${mode === 'map' ? css.active : ''}`}
        onClick={() => onChange('map')}
      >
        <span className={css.icon} aria-hidden="true">
          ▧
        </span>
        Karte
      </button>
    </div>
  );
}
