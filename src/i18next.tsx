import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .use(HttpBackend)
    .init({
        debug: true,
        fallbackLng: 'en',
        detection: {
            order: ['navigator', 'cookie', 'path', 'localStorage'],
            // caches: ['cookie'],
        },
        backend: {
            loadPath: `./assets/locales/{{lng}}/data.json`,
            keySeparator: false

        },
        returnObjects: true,
    });



export default i18n;