import styled from 'styled-components';

const FitzyIcon = styled.svg`
  display: inline-block;
  fill: ${p => (p.use === 'current' ? 'currentColor' : `${p.theme[p.use].bg}`)};
  height: ${p => `${p.size}px`};
  width: ${p => `${p.size}px`};
  vertical-align: middle;
`;

export default FitzyIcon;
