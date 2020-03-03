import styled, { css } from 'styled-components';
import { colors } from '@Common/styles/colors';
import { mediaQueries } from '@Common/styles/media-queries';

const activeItemStyles = css`
  opacity: 1!important;
  color: ${colors.white}!important;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 150ms;
`;

export const Item = styled.li`
  position: relative;
  white-space: nowrap;
  padding-left: 10px;
  transform-origin: 50% 100%;
  min-height: 6em;
  z-index: 1;
  ${mediaQueries.desktop} {
    min-height: 10vw;
  }
`;

export const Link = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  padding-right: calc(10vw + 60px);
  padding-left: 30px;
  color: ${colors.black};
  opacity: 1;
  ${({ activeItem }) => activeItem && activeItemStyles};
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 150ms;
  &:after {
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 150ms;
    display: block;
    position: absolute;
    top: 50%;
    right: 30px;
    content: '';
    width: 10vw;
    height: 5%;
    background-color: ${colors.black};
  }
  &:hover {
    ${mediaQueries.desktop} {
      color: ${colors.white};
    }
  }
`;

export const Number = styled.i`
  position: absolute;
  left: 0;
  top: 16px;
  font-size: .75em;
  line-height: 1.2em;
`;

export const Text = styled.span`
  font-size: 8.4vw;
`;
