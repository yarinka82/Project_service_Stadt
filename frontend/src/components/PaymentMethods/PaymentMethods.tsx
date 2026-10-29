import type { PaymentMethod } from '../../store/firms/firmsSlice';

import { PAYMENT_ICONS, PAYMENT_LABELS } from '../../constants/anbieterLabels';

import css from './PaymentMethods.module.css';

interface PaymentMethodsProps {
  methods?: PaymentMethod[];
}

export default function PaymentMethods({ methods }: PaymentMethodsProps) {
  if (!methods?.length) {
    return null;
  }

  return (
    <ul className={css.list} aria-label="Zahlungsmöglichkeiten">
      {methods.map((method) => (
        <li className={css.item} key={method}>
          {PAYMENT_ICONS[method] && (
            <img src={PAYMENT_ICONS[method]} width={20} height={20} alt="" />
          )}

          <span>{PAYMENT_LABELS[method]}</span>
        </li>
      ))}
    </ul>
  );
}
