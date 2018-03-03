import styled from 'styled-components';

import { CloseButton } from '../../styles/helpers.styled';

const sizes = {
  Error: 'red',
  Warning: 'yellow',
  Success: 'green',
  Info: 'blue'
};

const FitzyAlert = styled.div`
  position: relative;
  color: white;
  padding: 1rem;
  background-color: ${({ type }) => sizes[type]};

  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 25px;
  border: 1px solid #d05353;
  background-color: #d97575;

  h2 {
    line-height: normal;
    font-weight: bold;
    margin-right: 1.5rem;
    margin-bottom: 0.25rem;
  }

  div {
    margin-top: 0.25rem;
  }
`;

const FitzyClose = CloseButton.extend`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  height: 0.75rem;
  width: 0.75rem;

  > svg {
    fill: currentColor;
  }

  > span {
  }
`;

/** @component */
export { FitzyAlert, FitzyClose };
