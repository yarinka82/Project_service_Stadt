// import type {
//   FirmFeatures,
//   PaymentMethod,
//   Weekday,
// } from '../store/firms/firmsSlice';

// import back from '../assets/svg/anbieter/back.svg';
// import mapPin from '../assets/svg/anbieter/map-pin.svg';

// import cash from '../assets/svg/anbieter/cash.svg';
// import creditcard from '../assets/svg/anbieter/creditcard.svg';

// import email from '../assets/svg/anbieter/email.svg';
// import site from '../assets/svg/anbieter/site.svg';
// import phone from '../assets/svg/anbieter/phone.svg';

// import language from '../assets/svg/anbieter/language.svg';
// import parking from '../assets/svg/anbieter/parking.svg';
// import gift from '../assets/svg/anbieter/gift.svg';
// import wheelchair from '../assets/svg/anbieter/wheelchair.svg';
// import petFriendly from '../assets/svg/anbieter/pet-friendly.svg';

// export const WEEKDAYS: Weekday[] = [
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
//   'sunday',
// ];

// export const DAY_LABELS: Record<Weekday, string> = {
//   monday: 'Montag',
//   tuesday: 'Dienstag',
//   wednesday: 'Mittwoch',
//   thursday: 'Donnerstag',
//   friday: 'Freitag',
//   saturday: 'Samstag',
//   sunday: 'Sonntag',
// };

// export const LANGUAGE_LABELS: Record<string, string> = {
//   de: 'Deutsch',
//   en: 'Englisch',
//   ru: 'Russisch',
//   tr: 'Türkisch',
// };

// export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
//   cash: 'Bargeld',
//   card: 'Kartenzahlung',
//   paypal: 'PayPal',
// };

// export const PAYMENT_ICONS: Partial<Record<PaymentMethod, string>> = {
//   cash,
//   card: creditcard,
// };

// export const FEATURE_KEYS: (keyof FirmFeatures)[] = [
//   'parking',
//   'vouchers',
//   'wheelchair',
//   'petFriendly',
// ];

// export const FEATURE_LABELS: Record<keyof FirmFeatures, string> = {
//   parking: 'Parkplatz vorhanden',
//   vouchers: 'Gutscheine',
//   wheelchair: 'Rollstuhlgerecht',
//   petFriendly: 'Haustiere erlaubt',
// };

// export const FEATURE_ICONS: Record<keyof FirmFeatures, string> = {
//   parking,
//   vouchers: gift,
//   wheelchair,
//   petFriendly,
// };

// export const ANBIETER_ICONS = {
//   back,
//   mapPin,
//   email,
//   site,
//   phone,
//   language,
// };

// // ДЕМО: заполним после добавления скриншотов карт.
// // 1 — Frankfurt am Main, 2 — München, 3 — Würzburg.
// export const CITY_MAPS: Partial<Record<number, string>> = {};

import type {
  FirmFeatures,
  PaymentMethod,
  Weekday,
} from '../store/firms/firmsSlice';

import back from '../assets/svg/anbieter/back_arrow.svg';
import mapPin from '../assets/svg/anbieter/map-pin.svg';

import cash from '../assets/svg/anbieter/cash.svg';
import creditcard from '../assets/svg/anbieter/creditcard.svg';

import email from '../assets/svg/anbieter/email.svg';
import site from '../assets/svg/anbieter/site.svg';
import phone from '../assets/svg/anbieter/phone.svg';

import language from '../assets/svg/anbieter/language.svg';
import parking from '../assets/svg/anbieter/parking.svg';
import gift from '../assets/svg/anbieter/gift.svg';

import starFilled from '../assets/svg/anbieter/star-black.svg';
import starEmpty from '../assets/svg/anbieter/star_kontur_black.svg';

import mapFrankfurt from '../assets/img/img_demo/map_frankfurt.jpg';
import mapMuenchen from '../assets/img/img_demo/map_muenchen.jpg';
import mapWuerzburg from '../assets/img/img_demo/map_wuerzburg.jpg';

export const WEEKDAYS: Weekday[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const DAY_LABELS: Record<Weekday, string> = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};

export const LANGUAGE_LABELS: Record<string, string> = {
  de: 'Deutsch',
  en: 'Englisch',
  ru: 'Russisch',
  tr: 'Türkisch',
};

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  cash: 'Bargeld',
  card: 'Kartenzahlung',
  paypal: 'PayPal',
};

export const PAYMENT_ICONS: Partial<Record<PaymentMethod, string>> = {
  cash,
  card: creditcard,
};

export const FEATURE_KEYS: (keyof FirmFeatures)[] = [
  'parking',
  'vouchers',
  'wheelchair',
  'petFriendly',
];

export const FEATURE_LABELS: Record<keyof FirmFeatures, string> = {
  parking: 'Parkplatz vorhanden',
  vouchers: 'Gutscheine',
  wheelchair: 'Rollstuhlgerecht',
  petFriendly: 'Haustiere erlaubt',
};

export const FEATURE_ICONS: Partial<Record<keyof FirmFeatures, string>> = {
  parking,
  vouchers: gift,
};

export const ANBIETER_ICONS = {
  back,
  mapPin,
  email,
  site,
  phone,
  language,
  starFilled,
  starEmpty,
};

// ДЕМО: заполним после добавления скриншотов карт.
// 1 — Frankfurt am Main, 2 — München, 3 — Würzburg.
export const CITY_MAPS: Partial<Record<number, string>> = {
  1: mapFrankfurt,
  2: mapMuenchen,
  3: mapWuerzburg,
};
