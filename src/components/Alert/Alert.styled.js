import styled from 'styled-components';

import CloseButton from '../../styles/CloseButton.styled';
import Icon from '../Icon/Icon';
import { colorMixin } from '../../styles/mixins';
import { spacing } from '../../styles/spacing';
import { transitionTiming } from '../../styles/animations';

/**
 * Main styles for Alert Component
 */
const FitzyAlert = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${spacing.l} 2.5rem ${spacing.l} 3rem;
  align-items: baseline;
  border-left: 5px solid ${({ theme, use }) => theme[use].border};
  box-shadow: ${({ theme }) =>
    `${theme.boxShadowSize} ${theme.boxShadowColor}`};
  ${colorMixin};
  width: 100%;

  h2 {
    font-weight: bold;
    margin-bottom: ${spacing.xs};
    margin-right: ${spacing.xl};
  }

  > div {
    margin-top: ${spacing.xs};
  }
`;

/**
 * Extra Styles for Alert Icon positioning
 */
const FitzyAlertIcon = styled(Icon)`
  left: ${spacing.l};
  position: absolute;
  top: ${spacing.lg};
`;

/**
 * Extra Styles for Alert Close Button
 */
const FitzyClose = CloseButton.extend`
  position: absolute;
  top: ${spacing.lg};
  right: ${spacing.xl};
  height: ${spacing.xl};
  width: ${spacing.xl};

  &::after {
    border-radius: 50%;
    content: '';
    padding: ${spacing.l};
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
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
