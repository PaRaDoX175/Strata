import enMain from "/src/locales/en/main-page.json";
import ruMain from "/src/locales/ru/main-page.json";
import enProjects from "/src/locales/en/projects.json";
import ruProjects from "/src/locales/ru/projects.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      main: enMain,
      projects: enProjects,
    },
    ru: {
      main: ruMain,
      projects: ruProjects,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  ns: ["main", "projects"],
  defaultNS: "main",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
