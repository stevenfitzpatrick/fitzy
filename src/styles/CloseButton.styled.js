import styled from 'styled-components';

export const CloseButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  line-height: 1;
  outline: none;
  padding: 0;
`;

export const SRClose = styled.span`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default CloseButton;
