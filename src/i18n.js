import enMain from "/src/locales/en/main-page.json";
import ruMain from "/src/locales/ru/main-page.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      main: enMain,
    },
    ru: {
      main: ruMain,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  ns: ["main"],
  defaultNS: "main",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
