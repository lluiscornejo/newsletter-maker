import styled from 'styled-components';
import { colors } from '@Common/styles/colors';

export const Root = styled.div`
  text-transform: uppercase;
  position: relative;
`;

export const Options = styled.div`
  position: absolute;
  top: -103px;
  right: 0;
  border: 1px solid ${colors.darkGray};
  background: ${colors.white};
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
`;

export const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${colors.lightGray};
  }
`;

export const Selected = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  min-width: 39px;
  justify-content: space-between;
`;
