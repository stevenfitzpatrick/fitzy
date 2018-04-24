import styled from 'styled-components';

export const FitzyHeader = styled.header`
  display: grid;
  grid-template:
    '↩ 👾 ↪' /
    auto 1fr auto;
  width: 100%;
`;

export const FitzyNavigation = styled.nav``;

export const FitzyRight = styled.div`
  grid-area: ↪;
`;

export const FitzyLeft = styled.div`
  grid-area: ↩;
`;
