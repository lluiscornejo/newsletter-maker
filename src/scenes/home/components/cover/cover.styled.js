import styled, { css } from 'styled-components';

const enterCover = css`
  transition: all 1000ms cubic-bezier(.19,1,.22,1) 0ms;
  transform: translateX(-50%) skewY(0deg) translateY(-50%);
  opacity: 0.9;
`;

const leaveCover = css`
  transition: all 1000ms cubic-bezier(.19,1,.22,1) 0ms;
  transform: translateX(-50%) skewY(-5deg) translateY(-100%);
`;

export const Root = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%) skewY(5deg) translateY(50%);
  transform-origin: 0 0;
  will-change: transform, opacity;
  ${({ state }) => state === 'in' && enterCover};
  ${({ state }) => state === 'out' && leaveCover};
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
`;
