import en_US from "../locales/en_US";
import pt_BR from "../locales/pt_BR";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../config/request";
import { constants } from "../config/constants";

const TranslateContext = createContext();

export function TranslateWrapper({ children }) {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageLocale = await AsyncStorage.getItem(constants.LOCALE);

      if (storageLocale) {
        api.defaults.headers.common["locale"] = JSON.parse(storageLocale);
        setLanguage(JSON.parse(storageLocale));
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    async function changeLanguage() {
      await AsyncStorage.setItem(constants.LOCALE, JSON.stringify(language));
    }

    changeLanguage();
  }, [language]);

  const locales = {
    en_US,
    pt_BR,
  };

  const translate = locales[language || "pt_BR"];

  useEffect(() => {}, []);

  return (
    <TranslateContext.Provider value={{ translate, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslateContext() {
  const context = useContext(TranslateContext);
  return context;
}
