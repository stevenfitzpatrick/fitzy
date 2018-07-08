import styled from 'styled-components';
import { colors } from '../../theme/theme';

export const ModalFooter = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: end;
  align-items: center;
  border-top: 1px solid ${colors.placeholder};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
