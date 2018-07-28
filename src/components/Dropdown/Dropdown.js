import classnames from 'classnames';
import Downshift from 'downshift';
import React from 'react';
import { array, func, object, oneOfType, string } from 'prop-types';

import {
  DropDownButton,
  DropDownContainer,
  DropDownIcon,
  DropDownMenu,
  DropDownOption
} from './Dropdown.styled';

const Dropdown = ({
  items,
  itemToString,
  defaultInputValue,
  defaultSelectedItem,
  onChange,
  onBlur
}) => {
  return (
    <Downshift
      onChange={onChange}
      defaultInputValue={defaultInputValue}
      defaultSelectedItem={defaultSelectedItem}
      itemToString={itemToString}
    >
      {({
        getItemProps,
        getLabelProps,
        getInputProps,
        getToggleButtonProps,
        getMenuProps,
        getRootProps,
        itemToString,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <DropDownContainer {...getRootProps({ refKey: 'innerRef' })}>
          <label {...getLabelProps()}>Select an Item:</label>
          <DropDownButton
            {...getInputProps()}
            {...getToggleButtonProps({
              onBlur,
              isOpen
            })}
          >
            <span className="text">{inputValue}</span>
            <DropDownIcon icon="arrow" size="22" />
          </DropDownButton>

          {isOpen && (
            <React.Fragment>
              <DropDownMenu {...getMenuProps({ refKey: 'innerRef' })}>
                {items.map((item, index) => {
                  const itemClassnames = classnames({
                    selected: selectedItem === item,
                    active: highlightedIndex === index
                  });
                  return (
                    <DropDownOption
                      {...getItemProps({
                        item,
                        key: index,
                        className: itemClassnames
                      })}
                    >
                      {itemToString(item)}
                    </DropDownOption>
                  );
                })}
              </DropDownMenu>
            </React.Fragment>
          )}
        </DropDownContainer>
      )}
    </Downshift>
  );
};

Dropdown.propTypes = {
  /**
   * onChange Handler sending updated value
   */
  onChange: func.isRequired,
  /**
   * onBlur Handler for informing Formik of touched value
   */
  onBlur: func,
  /**
   * List of items to display in the dropdown
   */
  items: array,
  /**
   * When using object, function map selected value from object
   */
  itemToString: func,
  /**
   * Intitial placeholder for the dropdown
   */
  defaultInputValue: string,
  /**
   * Object Options preselected item in dropdown
   */
  defaultSelectedItem: oneOfType([string, object]),
  label: string
};

Dropdown.defaultProps = {
  defaultInputValue: 'Select an item',
  defaultSelectedItem: null,
  items: [],
  itemToString: i => (i == null ? '' : String(i)),
  label: 'Select an item',
  onBlur: () => {}
};

export default Dropdown;
