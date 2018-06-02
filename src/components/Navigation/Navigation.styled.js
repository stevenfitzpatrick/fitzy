import styled from 'styled-components';

export const FitzyHeader = styled.header`
  position: ${p => (p.isFixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template: 'left 👾 right' / auto 1fr auto;
  color: #fff;
  background-color: #465362;
  padding: 0 40px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    > li {
      list-style: none;
    }
  }
`;

export const FitzyNavigation = styled.nav`
  display: block;
`;

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
