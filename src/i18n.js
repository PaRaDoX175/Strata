import enMain from "/src/locales/en/main-page.json";
import ruMain from "/src/locales/ru/main-page.json";
// import kzMain from "/src/locales/kz/main-page.json";
import enProjects from "/src/locales/en/projects.json";
import ruProjects from "/src/locales/ru/projects.json";
// import kzProjects from "/src/locales/kz/projects.json";
import enAboutUs from "/src/locales/en/about-us.json";
import ruAboutUs from "/src/locales/ru/about-us.json";
// import kzAboutUs from "/src/locales/kz/about-us.json";
import enContacts from "/src/locales/en/contacts.json";
import ruContacts from "/src/locales/ru/contacts.json";
// import kzContacts from "/src/locales/kz/contacts.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      main: enMain,
      projects: enProjects,
      aboutUs: enAboutUs,
      contacts: enContacts,
    },
    ru: {
      main: ruMain,
      projects: ruProjects,
      aboutUs: ruAboutUs,
      contacts: ruContacts,
    },
    // kz: {
    //   main: kzMain,
    //   projects: kzProjects,
    //   aboutUs: kzAboutUs,
    //   contacts: kzContacts
    // },
  },
  lng: "ru",
  fallbackLng: "ru",
  ns: ["main", "projects", "aboutUs", "contacts"],
  defaultNS: "main",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
