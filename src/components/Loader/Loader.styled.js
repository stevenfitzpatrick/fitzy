import styled from 'styled-components';

import { rotate } from '../../styles/animations';

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  animation: ${rotate} 1s infinite ${props => props.alternate && 'alternate'};
`;

const FitzyLoader = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  position: relative;
  user-select: none;

  > ${/*sc-s*/ Circle} {
    border: ${({ size }) => `calc(${size}px / 10)`} solid transparent;

    &:first-of-type {
      border-top-color: ${({ theme, use }) => theme[use].bg};
      z-index: 1000;
    }

    &:last-of-type {
      border-bottom-color: ${({ theme, use }) => theme[use].bg};
      z-index: 1000;
    }
  }
`;

export { FitzyLoader, Circle };
