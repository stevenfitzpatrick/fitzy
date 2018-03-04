import styled from 'styled-components';

export const CloseButton = styled.button`
  -webkit-appearance: none;
  background: transparent;
  padding: 0;
  border: 0;
  outline: none;
  color: inherit;
  cursor: pointer;
  line-height: 1;
`;

export const SRClose = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default CloseButton;
