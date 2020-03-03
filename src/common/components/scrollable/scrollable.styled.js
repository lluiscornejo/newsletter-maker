import styled from 'styled-components';

export const Root = styled.div`
  transition: all 2s cubic-bezier(.19,1,.22,1);
  transform-origin: 50% 100%;
  will-change: translate;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
`;
