import styled from 'styled-components';

import CloseButton from '../../styles/CloseButton.styled';
import ExclamationIcon from '../../styles/icons/ExclamationIcon';
import { colorMixin } from '../../styles/mixins';
import { transitionTiming } from '../../styles/animations';

/**
 * Main styles for Alert Component
 */
const FitzyAlert = styled.div`
  align-items: baseline;
  border-left: 5px solid ${({ theme, use }) => theme[use].border};
  box-shadow: ${({ theme }) =>
    `${theme.boxShadowSize} ${theme.boxShadowColor}`};
  display: flex;
  ${colorMixin};
  flex-wrap: wrap;
  padding: 1rem 2.5rem 1rem 3rem;
  position: relative;
  width: 100%;

  h2 {
    font-weight: bold;
    margin-bottom: 0.25rem;
    margin-right: 1.5rem;
  }

  > div {
    margin-top: 0.25rem;
  }
`;

/**
 * Extra Styles for Alert Icon positioning
 */
const FitzyAlertIcon = styled(ExclamationIcon)`
  left: 1rem;
  position: absolute;
  top: 1.125rem;
`;

/**
 * Extra Styles for Alert Close Button
 */
const FitzyClose = CloseButton.extend`
  height: 0.75rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 0.75rem;

  &::after {
    border-radius: 50%;
    content: '';
    left: 50%;
    padding: 1rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background-color ${transitionTiming};
  }

  &:hover {
    &::after {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

/** @component */
export { FitzyAlert, FitzyClose, FitzyAlertIcon };
