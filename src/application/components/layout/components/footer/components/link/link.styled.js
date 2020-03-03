import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '@Common/styles/colors';

const item = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: ${colors.lightBlack};
`;

export const StyledLink = styled(NavLink)`
  ${item};
  &.active {
    color: ${colors.black};
  }
`;

export const StyledParagraph = styled.p`
  ${item};
`;
