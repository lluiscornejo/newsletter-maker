import React, { useContext, useState, useRef } from 'react';
import { useClickOutside } from '@Common/hooks/use-click-outside';
import { GlobalContext } from '@Application/components/global-context';
import { languages, getAvailableSimilarLanguage, getCurrentHtmlLang } from '@Common/utils/language';
import { setLanguage } from '@Application/store/actions';
import Angle from '@Common/components/icons/components/angle';
import {
  Root,
  Options,
  Selected,
  Item,
} from './lang-styled';

const languagesList = Object.values(languages);

const Lang = () => {
  const [openLang, setOpenLang] = useState(false);
  const optionsRef = useRef(null);
  const selectedRef = useRef(null);
  useClickOutside([optionsRef, selectedRef], () => setOpenLang(false));
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Root>
      <Options isOpen={openLang} ref={optionsRef}>
        <ul>
          {languagesList.map((lang, idx) => (
            <Item key={idx}>
              <div onClick={() => setLanguage(dispatch, getAvailableSimilarLanguage(lang))}>
                {lang}
              </div>
            </Item>
          ))}
        </ul>
      </Options>
      <Selected ref={selectedRef} onClick={() => setOpenLang(!openLang)}>
        <span>
          {getCurrentHtmlLang(state.language)}
        </span>
        <Angle direction={openLang ? 'up' : 'down'} />
      </Selected>
    </Root>
  );
};

export default Lang;
