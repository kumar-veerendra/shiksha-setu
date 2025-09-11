// frontend/src/utils/translate.js

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
  },
  hi: {
    home: "होम",
    about: "के बारे में",
    contact: "संपर्क करें",
    login: "लॉगिन",
    signup: "साइन अप",
  },
};

export const translate = (lang, key) => {
  return translations[lang][key] || key;
};
