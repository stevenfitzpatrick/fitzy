import styled from 'styled-components';

import { colorMixin, resetInput, secondaryMixin } from '../../styles/mixins';
import { colors } from '../../theme/theme';
import { FitzyLoader } from '../Loader/Loader.styled';
import { letterSpacing } from '../../styles/headers';
import { spacing } from '../../styles/spacing';
import { transitionTiming } from '../../styles/animations';

const FitzyIconButton = styled.button`
  ${resetInput};
  line-height: 1rem;
  padding: 0.5rem;
  position: relative;

  transition: all 0.25s ease;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(90deg);

  &::after {
    border-radius: 50%;
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    padding: ${spacing.l};
    transition: background-color ${transitionTiming};
  }
`;

/** @component */
export { FitzyIconButton };
