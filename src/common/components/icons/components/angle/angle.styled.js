import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

const directions = {
  up: 'rotate(-90deg)',
  right: 'rotate(0deg)',
  down: 'rotate(90deg)',
  left: 'rotate(180deg)',
};

export const Svg = styled.svg`
  transform: ${({ direction }) => (direction && directions[direction]) ? directions[direction] : 'rotate(0deg)'};
  g {
    fill: ${({ isExternal }) => isExternal ? colors.primaryColor : colors.secondaryColor};
  }
`;
