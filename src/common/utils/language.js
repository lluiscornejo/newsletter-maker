export const defaultLanguage = 'es-ES';

export const languages = {
  es: 'es',
  en: 'en',
};

export const availableLanguages = {
  es: 'es-ES',
  en: 'en-EN',
};

export const isLanguageIncluded = (lang) => {
  const languagesList = Object.values(languages);
  return languagesList.some((item) => lang.indexOf(item) !== -1);
};

export const getCurrentHtmlLang = (lang) => {
  const languagesList = Object.values(languages);
  return languagesList.find((item) => lang.indexOf(item) !== -1);
};

export const getAvailableSimilarLanguage = (lang) => {
  return isLanguageIncluded(lang)
    ? availableLanguages[getCurrentHtmlLang(lang)]
    : defaultLanguage;
};
