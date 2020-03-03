import styled, { css } from 'styled-components';
import { mediaQueries } from '@Common/styles/media-queries';
import { colors } from '@Common/styles/colors';

const commonHeading = css`
  color: ${colors.mediumBlack};
  font-weight: 600;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'};
  margin: 0 auto;
`;

export const StyledH1 = styled.h1`
  ${commonHeading};
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  color: ${colors.black};
  ${mediaQueries.smallTablet} {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const StyledH2 = styled.h2`
  ${commonHeading};
  font-size: 40px;
  line-height: 45px;

  ${mediaQueries.smallTablet} {
    font-size: 64px;
    line-height: 70px;
  }
`;

export const StyledH3 = styled.h3`
  ${commonHeading};
  font-size: 35px;
  line-height: 40px;
  ${mediaQueries.smallTablet} {
    font-size: 48px;
    line-height: 58px;
  }
`;

export const StyledH4 = styled.h4`
  ${commonHeading};
  font-size: 30px;
  line-height: 35px;
  ${mediaQueries.smallTablet} {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const DefaultHeading = styled.h5`
  ${commonHeading};
  font-size: 25px;
  line-height: 30px;
  ${mediaQueries.smallTablet} {
    font-size: 30px;
    line-height: 40px;
  }
`;
