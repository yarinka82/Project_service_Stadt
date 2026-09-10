import css from './ResultsCounter.module.css';

interface ResultsCounterProps {
  count: number;
}

export const ResultsCounter = ({ count }: ResultsCounterProps) => {
  return (
    <div className={css.container}>
      {/* Выводим переданное количество */}
      <h2 className={css.title}>{count} Treffer gefunden</h2>
      
      {/* Пустой блок. позже вставить иконку/кнопку карты*/}
      <div className={css.mapTogglePlaceholder} aria-hidden="true" />
    </div>
  );
};