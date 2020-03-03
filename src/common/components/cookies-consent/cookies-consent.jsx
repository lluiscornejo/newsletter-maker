import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { GlobalContext } from '@Application/components/global-context';
import { colors } from '@Common/styles/colors';

const CookiesConsent = () => {
  const { i18n } = useContext(GlobalContext);

  return (
    <CookieConsent
      location="bottom"
      buttonText={i18n.t('cookies.button')}
      cookieName="optica-app-web-cookie-euconsent"
      style={{ background: colors.mediumBlack }}
      buttonStyle={{ background: colors.primaryColor, color: colors.white, fontSize: '13px' }}
      expires={150}
    >
      {i18n.t('cookies.text')}
    </CookieConsent>
  );
};

export default CookiesConsent;
