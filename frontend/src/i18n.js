import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import es from './locales/es.json';
import ar from './locales/ar.json';

const resources = {
  tr: { translation: tr },
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  ru: { translation: ru },
  es: { translation: es },
  ar: { translation: ar },
};

// URL'den dil algılama
const getLanguageFromURL = () => {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
  const detectedLang = langMatch ? langMatch[1] : 'tr';
  return detectedLang;
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromURL(),
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 