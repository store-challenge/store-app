import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    flag: 'circle-flags:uk',
    logo: 'logo',
    now: '{currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}',
    about_project: 'About the project',
    contact_us: 'Contact us',
    price_display: '{n, number, ::currency/GBP}',
    currency: 'GBP',
  },
  [LOCALES.UKRAINIAN]: {
    flag: 'emojione:flag-for-ukraine',
    logo: 'Лого',
    now: '{currentDateTime, date, ::EEE, MMM d, yyyy hh:mm }',
    about_project: 'Про проєкт',
    contact_us: "Зв'яжіться з нами",
    price_display: '{n, number, ::currency/UAH}',
    currency: 'UAH',
  },
};
