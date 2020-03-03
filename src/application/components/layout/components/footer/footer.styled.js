import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

const isScrolled = (scrolled) => scrolled ? 0 : 1;

export const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 9vh;
  left: 5vw;
  width: 90vw;
`;

export const ScrollInfo = styled.span`
  position: absolute;
  font-size: .81em;
  line-height: 1.2em;
  color: ${colors.gray};
  transition: ${({ loaded }) => !loaded ? 'all 0ms cubic-bezier(.19,1,.22,1) 0ms' : 'all 2000ms cubic-bezier(.19,1,.22,1) 0ms'};
  left: ${({ loaded }) => !loaded ? '-30vw' : 0};
  opacity: ${({ loaded, isHomeScrolled }) => !loaded ? 0 : isScrolled(isHomeScrolled)};
`;
