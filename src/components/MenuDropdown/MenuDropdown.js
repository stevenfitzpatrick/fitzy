import Downshift from 'downshift';
import React from 'react';
import { func, number, object, string } from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';

import { DropDownOption } from '../Dropdown/Dropdown.styled';
import { Frame, List } from './MenuDropdown.styled';

const MenuDropdown = ({
  children,
  itemToString,
  onChange,
  placement,
  renderButton,
  referenceProps,
  popperProps,
  width,
  ...props
}) => (
  <Manager>
    <Downshift itemToString={itemToString} onChange={onChange} {...props}>
      {({
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          <Reference>
            {({ ref }) =>
              renderButton({ getToggleButtonProps, ref, ...referenceProps })
            }
          </Reference>
          {isOpen && (
            <Popper placement={placement}>
              {({ ref, style }) => (
                <MenuDropdown.Frame innerRef={ref} style={style} width={width}>
                  {children({
                    getItemProps,
                    getMenuProps,
                    itemToString,
                    Menu: List,
                    MenuItem: DropDownOption,
                    selectedItem,
                    highlightedIndex,
                    ...popperProps
                  })}
                </MenuDropdown.Frame>
              )}
            </Popper>
          )}
        </div>
      )}
    </Downshift>
  </Manager>
);

MenuDropdown.Frame = Frame;

MenuDropdown.propTypes = {
  itemToString: func,
  onChange: func,
  renderButton: func.isRequired,
  referenceProps: object,
  popperProps: object,
  placement: string,
  width: number
};

MenuDropdown.defaultProps = {
  itemToString: item => (item ? item.label : ''),
  onChange: () => {},
  referenceProps: {},
  popperProps: {},
  placement: 'bottom-start',
  width: null
};

export default MenuDropdown;
