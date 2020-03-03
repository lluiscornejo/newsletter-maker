import styled, { createGlobalStyle, css } from 'styled-components';
import { colors } from '@Common/styles/colors';

const activeCoverStyles = css`
  ul > li > div {
    opacity: 0.1!important;
    color: ${colors.white}!important;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 150ms;
    &:after {
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 150ms;
      background: ${colors.white}!important;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const GlobalStyles = createGlobalStyle`
  ${({ activeCover }) => activeCover && activeCoverStyles};
`;
