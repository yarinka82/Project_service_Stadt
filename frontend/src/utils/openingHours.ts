import type {
  OpeningHours,
  TimeInterval,
  Weekday,
} from '../store/firms/firmsSlice';

export type OpeningStatus = 'open' | 'closed' | 'unknown';

const DAYS_FROM_SUNDAY: Weekday[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export function getOpeningStatus(
  openingHours: OpeningHours | undefined,
  now: Date
): OpeningStatus {
  if (!openingHours) {
    return 'unknown';
  }

  const day = DAYS_FROM_SUNDAY[now.getDay()];

  if (!day) {
    return 'unknown';
  }

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;

  const isOpen = openingHours[day].some(
    ({ from, to }) => from <= currentTime && currentTime < to
  );

  return isOpen ? 'open' : 'closed';
}

export function formatIntervals(intervals: TimeInterval[]): string {
  if (intervals.length === 0) {
    return 'geschlossen';
  }

  return intervals.map(({ from, to }) => `${from}-${to}`).join(', ');
}

export function formatRating(rating: number): string {
  return rating.toFixed(1).replace('.', ',');
}
