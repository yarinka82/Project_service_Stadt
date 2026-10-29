import { ANBIETER_ICONS } from '../../constants/anbieterLabels';
import css from './ContactList.module.css';

interface ContactListProps {
  email?: string;
  website?: string;
  phone?: string;
}

export default function ContactList({
  email,
  website,
  phone,
}: ContactListProps) {
  if (!email && !website && !phone) {
    return null;
  }

  const websiteLabel = website
    ?.replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0];

  return (
    <div className={css.contacts}>
      {email && (
        <p className={css.row}>
          <img src={ANBIETER_ICONS.email} width={13} height={13} alt="" />

          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      {website && (
        <p className={css.row}>
          <img src={ANBIETER_ICONS.site} width={13} height={13} alt="" />

          <a href={website} target="_blank" rel="noopener noreferrer">
            {websiteLabel}
          </a>
        </p>
      )}

      {phone && (
        <p className={`${css.row} ${css.phone}`}>
          <img src={ANBIETER_ICONS.phone} width={13} height={13} alt="" />

          {/* ДЕМО: вымышленный номер, без tel:-ссылки. */}
          <span>{phone}</span>
        </p>
      )}
    </div>
  );
}
