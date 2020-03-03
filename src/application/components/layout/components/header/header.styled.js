import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '@Common/styles/colors';
import { mediaQueries } from '@Common/styles/media-queries';

const link = css`
  position: absolute;
  font-size: 1.375em;
  line-height: 1.2em;
  font-weight: 400;
  opacity: ${({ loaded }) => !loaded ? 0 : 1};
  transition: ${({ loaded }) => !loaded ? 'all 0ms cubic-bezier(.19,1,.22,1) 0ms' : 'all 2000ms cubic-bezier(.19,1,.22,1) 0ms'};
  color: ${({ light }) => light ? colors.white : colors.black};
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${({ light }) => light ? colors.white : colors.black};
    bottom: 0;
    left: 0;
    transition: all 1000ms cubic-bezier(.19,1,.22,1) 0ms;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 9vh;
  left: 5vw;
  width: 90vw;
`;

export const HomeLink = styled(NavLink)`
  ${link};
  left: ${({ loaded }) => !loaded ? '-30vw' : 0};
`;

export const Link = styled.span`
  cursor: pointer;
  ${link};
  right: ${({ loaded }) => !loaded ? '-30vw' : 0};
`;

export const StyledHeader = styled.header`
  ${mediaQueries.mobileOnly} {
    background: ${colors.white};
    height: 140px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
