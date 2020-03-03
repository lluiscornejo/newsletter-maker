import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { GlobalContext } from '@Application/components/global-context';
import { Root } from './layout.styled';

const Layout = ({ children, location }) => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Root>
      <header>header</header>
      <main>{children}</main>
    </Root>
  );
};

export default withRouter(Layout);
