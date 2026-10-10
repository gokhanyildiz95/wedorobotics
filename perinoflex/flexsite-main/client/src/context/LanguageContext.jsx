import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { englishContent } from '../content/englishContent';
import { turkishContent } from '../content/turkishContent';

const LanguageContext = createContext(null);

function getInitialLanguage() {
  try {
    return window.localStorage.getItem('perinoFlexLanguage') === 'tr' ? 'tr' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage) {
    const supportedLanguage = nextLanguage === 'tr' ? 'tr' : 'en';
    setLanguage(supportedLanguage);

    try {
      window.localStorage.setItem('perinoFlexLanguage', supportedLanguage);
    } catch {
      // The website still works if browser storage is disabled.
    }
  }

  const languageContextValue = useMemo(() => {
    const content = language === 'tr' ? turkishContent : englishContent;
    return { language, content, changeLanguage };
  }, [language]);

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('useLanguage must be used inside LanguageProvider.');
  }

  return languageContext;
}
