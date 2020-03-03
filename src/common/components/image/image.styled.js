import styled from 'styled-components';
import { mediaQueries } from '@Common/styles/media-queries';

export const StyledImage = styled.img`
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  ${({ mobileWidth }) => mobileWidth && `
    width: ${mobileWidth}px;
  `};
  ${mediaQueries.desktop} {
    width: ${({ width }) => width ? `${width}px` : 'auto'};
  }
  max-width: 100%;
  ${({ center }) => center && `
    margin: 0 auto;
    display: inherit;
  `};
  padding: ${({ padding }) => padding || 0}px 0px;
  align-self: center;
`;
