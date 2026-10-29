import type { OpeningStatus } from '../../utils/openingHours';
import css from './OpeningStatusBadge.module.css';

interface OpeningStatusBadgeProps {
  status: OpeningStatus;
}

const STATUS_LABELS: Record<OpeningStatus, string> = {
  open: 'geöffnet',
  closed: 'geschlossen',
  unknown: 'Öffnungszeiten unbekannt',
};

export default function OpeningStatusBadge({
  status,
}: OpeningStatusBadgeProps) {
  return (
    <span className={`${css.badge} ${css[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
