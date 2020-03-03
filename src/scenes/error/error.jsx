import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-simple-styled-grid';
import MetaData from '@Common/components/meta-data';
import { GlobalContext } from '@Application/components/global-context';
import {
  Root,
  Title,
  StyledScrollable,
  Description,
  GlobalStyles,
} from './error.styled';

const Error = () => {
  const { i18n } = useContext(GlobalContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    setTimeout(() => {
      setLoaded(true);
    }, 250);
  }, []);

  return (
    <Root isLoaded={loaded}>
      <MetaData title={`Optica-App | ${i18n.t('error.title')}`} />
      <GlobalStyles />
      <StyledScrollable>
        <Container>
          <Title type="h3" center>404</Title>
          <Description>Página no encontrada</Description>
        </Container>
      </StyledScrollable>
    </Root>
  );
};

export default Error;
