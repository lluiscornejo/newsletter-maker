import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

export const Link = styled.a`
  font-size: 20px;
  color: ${colors.primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
