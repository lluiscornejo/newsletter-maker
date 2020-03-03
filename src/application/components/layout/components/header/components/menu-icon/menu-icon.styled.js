import styled, { css } from 'styled-components';
import { colors } from '@Common/styles/colors';

const line = css`
  position: relative;
  width: 30px;
  height: 1px;
  background: ${colors.mediumBlack};
`;

export const Root = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 14px;
  cursor: pointer;
`;

export const TopLine = styled.div`
  ${line};
  top: ${({ isOpen }) => isOpen ? '7px' : 0};
  left: 0;
  ${({ isOpen }) => isOpen && `
    transform: rotate(45deg);
  `};
`;

export const BottomLine = styled.div`
  ${line};
  top: ${({ isOpen }) => isOpen ? '7px' : '12px'};
  left: 0;
  ${({ isOpen }) => isOpen && `
    transform: rotate(-45deg);
  `};
`;
