import type { OpeningHours as OpeningHoursData } from '../../store/firms/firmsSlice';

import { DAY_LABELS, WEEKDAYS } from '../../constants/anbieterLabels';

import { formatIntervals } from '../../utils/openingHours';

import css from './OpeningHours.module.css';

interface OpeningHoursProps {
  openingHours?: OpeningHoursData;
}

export default function OpeningHours({ openingHours }: OpeningHoursProps) {
  return (
    <section className={css.section}>
      <h2 className={`${css.title} ${!openingHours ? css.unknown : ''}`}>
        {openingHours ? 'Öffnungszeiten' : 'Öffnungszeiten unbekannt'}
      </h2>

      {openingHours && (
        <dl className={css.hours}>
          {WEEKDAYS.map((day) => {
            const intervals = openingHours[day];
            const isClosed = intervals.length === 0;

            return (
              <div
                className={`${css.row} ${isClosed ? css.closed : ''}`}
                key={day}
              >
                <dt>{DAY_LABELS[day]}</dt>
                <dd>{formatIntervals(intervals)}</dd>
              </div>
            );
          })}
        </dl>
      )}
    </section>
  );
}
