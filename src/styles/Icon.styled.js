import styled from 'styled-components';

const Icon = styled.svg`
  display: block;
  fill: currentColor;
  height: ${({ height }) => height ? `${height}px` : '24px'};
  width: ${({ width }) => width ? `${width}px` : '24px'};

  &:hover {
    fill: #eee;
  }
`;

export default Icon;
