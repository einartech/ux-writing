import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import good from './locales/good.json';
import bad from './locales/bad.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      good: { translation: good },
      bad: { translation: bad }
    },
    lng: 'good', // default language
    fallbackLng: 'good',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
