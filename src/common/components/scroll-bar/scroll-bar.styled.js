import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

export const Root = styled.div`
  position: fixed;
  height: 10px;
  left: 0;
  top: 0;
  z-index: 21;
`;

export const Line = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: ${({ color }) => color || colors.darkGray};
`;
