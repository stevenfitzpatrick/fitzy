import styled, { css } from 'styled-components';

import Icon from '../Icon/Icon';
import { colors } from '../../theme/theme';

const DropDownContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  min-width: 14rem;
  z-index: 0;
`;

const DropDownIcon = styled(Icon)`
  fill: ${colors.primary};
  cursor: pointer;
  transition: all 0.25s;
`;

const DropDownButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.375rem;
  border: 1px solid ${colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${colors.primaryActive};
    outline: none;
  }

  > ${/*sc-s*/ DropDownIcon} {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  }
`;

const DropDownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #eee;
  list-style: none;
  padding: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  margin-top: 1rem;

  &:empty {
    ::after {
      content: 'No options available.';
    }
    padding: 0.75rem;
    font-size: 14px;
  }
`;

const DropDownOption = styled.li`
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1.5rem;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.15s;

  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  &.active {
    background-color: ${colors.secondaryHover};
    color: ${colors.primaryActive};
  }

  &.selected {
    background-color: ${colors.secondaryActive};
    color: ${colors.primaryActive};
    font-weight: bold;
  }
`;

const menuStyles = css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

export const DropDownArrow = styled.div`
  position: absolute;
  background-color: inherit;
  width: 15px;
  height: 15px;

  transform: translateY(-50%) translateX(-50%) rotate(45deg);
`;

export {
  DropDownOption,
  DropDownIcon,
  DropDownButton,
  menuStyles,
  DropDownMenu,
  DropDownContainer
};
