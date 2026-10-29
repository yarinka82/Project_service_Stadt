import css from './ContactBar.module.css';

interface ContactBarProps {
  href?: string;
}

export default function ContactBar({ href }: ContactBarProps) {
  if (!href) {
    return null;
  }

  return (
    <div className={css.bar}>
      <a
        className={css.link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Kontakt
      </a>
    </div>
  );
}
