
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translatePageEN from "../translations/English/TranslatePageEN.json"
import translatePagePT from "../translations/Portuguese/translatePagePT.json"

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        ...translatePageEN,
      },
    },
    PT: {
      translation: {
        ...translatePagePT,
      },
    },
  },
  lng: "EN", // idioma inicial
  fallbackLng: "EN",
});
