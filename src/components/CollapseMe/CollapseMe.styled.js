import styled from 'styled-components';

export const FitzyCollapse = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-out;
  opacity: ${p => (p.open ? 1 : 0)};
`;
