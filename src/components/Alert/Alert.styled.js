import styled from 'styled-components';

import CloseButton from '../../styles/CloseButton.styled';
import ExclamationIcon from '../../styles/icons/ExclamationIcon';

const sizes = {
  Error: 'red',
  Warning: 'yellow',
  Success: 'green',
  Info: 'blue'
};

const FitzyAlert = styled.div`
  position: relative;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  padding: 1rem 2.5rem 1rem 3rem;
  background-color: ${({ level }) => sizes[level]};

  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
  border-left: 5px solid #d05353;
  background-color: #d97575;

  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);

  h2 {
    font-weight: bold;
    margin-right: 1.5rem;
    margin-bottom: 0.25rem;
  }

  div {
    margin-top: 0.25rem;
  }
`;

const FitzyAlertIcon = styled(ExclamationIcon)`
  position: absolute;
  left: calc(1rem);
  top: 1.125rem;
`;

const FitzyClose = CloseButton.extend`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  height: 0.75rem;
  width: 0.75rem;

  &:hover {
    &:after {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &:after {
    content: '';
    position: absolute;
    transition: background-color 0.25s ease-in;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

/** @component */
export { FitzyAlert, FitzyClose, FitzyAlertIcon };
