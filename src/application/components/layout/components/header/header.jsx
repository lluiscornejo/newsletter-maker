import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatConditional } from '@Common/utils/conditional';
import {
  StyledHeader,
  Nav,
  HomeLink,
  Link,
} from './header.styled';

const Header = ({
  loaded,
  light,
  location,
  history,
}) => {
  const isProfile = location.pathname === '/profile';
  const profileText = isProfile ? 'Close' : 'Profile';

  return (
    <StyledHeader>
      <Nav>
        <HomeLink loaded={formatConditional(loaded)} to="/" light={light}>Luis Cornejo</HomeLink>
        <Link
          onClick={() => isProfile ? history.goBack() : history.push('/profile')}
          loaded={formatConditional(loaded)}
          light={light}
        >
          {profileText}
        </Link>
      </Nav>
    </StyledHeader>
  );
};

export default withRouter(Header);
