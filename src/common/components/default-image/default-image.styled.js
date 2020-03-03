import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

export const Root = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  max-width: 100%;
  width: 100%;
  display: block;
  position: relative;
  background: ${colors.lightGray};
`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: 30%;
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: auto;
`;
