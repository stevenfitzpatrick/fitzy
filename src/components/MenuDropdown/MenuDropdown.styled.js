import styled from 'styled-components';

import { colors } from '../../theme/theme';

export const Frame = styled.div`
  background-color: ${colors.light};
  color: ${colors.bgColor};

  border-radius: 4px;
  border: 1px solid ${colors.primaryDisabled};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin-top: 1rem;

  min-width: 10rem;
  width: ${({ width }) => (width ? `${width}rem` : 'auto')};
  z-index: 100;
`;

export const List = styled.ul`
  list-style: none;
`;
