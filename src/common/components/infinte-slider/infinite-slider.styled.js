import styled from 'styled-components';
import { mediaQueries } from '@Common/styles/media-queries';

export const Root = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 3;
  min-height: 6em;
  transform-origin: 50% 100%;
  will-change: translate;
  ${mediaQueries.desktop} {
    min-height: 10vw;
  }
  opacity: ${({ loaded }) => loaded ? 1 : 0};
  transition: all 1000ms cubic-bezier(.19,1,.22,1) 0ms;
`;
