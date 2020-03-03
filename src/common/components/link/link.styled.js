import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '@Common/styles/colors';

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: ${colors.secondaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
