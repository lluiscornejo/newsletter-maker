import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${({ loaded }) => loaded ? 1 : 0};
  transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  will-change: opacity;
  z-index: 1;
`;

export const Root = styled.ul`
  position: relative;
  z-index: 3;
  transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  will-change: opacity;
`;
