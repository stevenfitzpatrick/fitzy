import styled from 'styled-components';

import { arrowSideMixin, colorMixin } from '../../styles/mixins';
import { font } from '../../styles/font';
import { spacing } from '../../styles/spacing';
import { transitionTiming } from '../../styles/animations';

export const Wrapper = styled.div`
  display: contents;
`;

export const TooltipWrapper = styled.div.attrs({
  role: 'tooltip',
  'aria-hidden': p => !p.show
})`
  position: absolute;
  will-change: transform;
  top: 0;
  left: 0;

  transform: ${p => `translateX(${p.left}px) translateY(${p.top}px)`};
  transition: opacity ${transitionTiming};
  opacity: ${p => (p.show ? 1 : 0)};

  z-index: 10;
  max-width: 12rem;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadowSize} ${theme.boxShadowColor}`};
`;

export const TooltipInner = styled.div`
  position: relative;
  padding: ${spacing.s} ${spacing.m};

  ${colorMixin};

  font-size: ${font.m};
  text-align: center;
  border-radius: 4px;
`;

export const TooltipArrow = styled.div`
  position: absolute;
  background-color: inherit;
  width: 15px;
  height: 15px;

  transform: translateY(-50%) translateX(-50%) rotate(45deg);
  ${arrowSideMixin};
`;
