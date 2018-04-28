import styled from 'styled-components';

export const FitzyHeader = styled.header`
  position: ${p => (p.isFixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template: 'left 👾 right' / auto 1fr auto;
  width: 100%;
  border: 1px solid;
`;

export const FitzyNavigation = styled.nav``;

export const FitzyRight = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
`;

export const FitzyLeft = styled.div`
  grid-area: left;
  display: flex;
  align-items: center;
`;
