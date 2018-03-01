import styled from 'styled-components';
import Alert from './Alert';

const sizes = {
  Error: 'red',
  Warning: 'yellow',
  Success: 'green',
  Info: 'blue'
};

const FitzyAlert = styled.div`
  position: relative;
  color: white;
  padding: 8px;
  background-color: ${({ type }) => sizes[type]};
`;

const FitzyClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
`;

/** @component */
export { FitzyAlert, FitzyClose };
