import styled, { createGlobalStyle, css } from 'styled-components';
import Heading from '@Common/components/heading';

export const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const loadedStyles = css`
  transform: skewY(0) translate3d(0, 100%, 0);
`;

const section = css`
  max-width: 997px;
  margin: 0 auto;
`;

export const Root = styled.section`
  position: relative;
  z-index: 0;
  opacity: ${({ isLoaded }) => isLoaded ? 1 : 0};
  transform: skewY(5deg) translate3d(0, 150%, 0);
  transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms;
  ${({ isLoaded }) => isLoaded && loadedStyles};
  ${section};
`;

export const Title = styled(Heading)`
  padding: 20px 0;
  font-size: 16vw;
  line-height: 14vw;
`;

export const Description = styled(Heading)`
  padding: 20px 0;
  font-size: 3vw;
  text-align: center;
`;

export const StyledScrollable = styled.div`
  position: relative;
  top: 100%;
  z-index: 11;
  ${section};
`;
