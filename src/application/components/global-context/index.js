import React, { useReducer, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import detectBrowserLanguage from 'detect-browser-language';
import i18n from 'i18n-js';
import ReactGA from 'react-ga';
import { es } from '@Common/i18n/locales/es';
import { en } from '@Common/i18n/locales/en';
import { initialState, reducer } from '@Application/store/reducer';
import { getLocalStorage } from '@Common/utils/local-storage';
import { setLanguage } from '@Application/store/actions';
import { getAvailableSimilarLanguage } from '@Common/utils/language';
import { gaTrackId } from '@Config/variables';

i18n.fallbacks = true;
i18n.translations = { es, en };

ReactGA.initialize(gaTrackId);

export const GlobalContext = React.createContext({});

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userLanguage = detectBrowserLanguage();

  useEffect(() => {
    if (getLocalStorage()) {
      setLanguage(dispatch, getLocalStorage().language);
    } else {
      setLanguage(dispatch, getAvailableSimilarLanguage(userLanguage));
    }
  }, []);
  i18n.locale = state.language;

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch,
      i18n,
      ReactGA,
    }}
    >
      <Helmet>
        <html lang={state.language} />
      </Helmet>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
