import classnames from 'classnames';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import React from 'react';

import {
  DropDownButton,
  DropDownContainer,
  DropDownIcon,
  DropDownMenu,
  DropDownOption
} from './Dropdown.styled';

const Dropdown = ({
  items,
  onChange,
  onBlur,
  defaultInputValue,
  placeholder
}) => {
  return (
    <Downshift
      onChange={onChange}
      defaultInputValue={defaultInputValue}
      itemToString={i => (i ? i.name : '')}
    >
      {({
        getItemProps,
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
          <DropDownButton
            {...getToggleButtonProps({
              onBlur,
              isOpen
            })}
          >
            <span className="text">
              {inputValue ? inputValue : placeholder}
            </span>
            <DropDownIcon icon="arrow" size="24" />
          </DropDownButton>

          {isOpen && (
            <React.Fragment>
              <DropDownMenu {...getMenuProps({ refKey: 'innerRef' })}>
                {items.map((item, index) => {
                  const itemClassnames = classnames({
                    selected: selectedItem && selectedItem.id === item.id,
                    active: highlightedIndex === index
                  });
                  return (
                    <DropDownOption
                      {...getItemProps({
                        item,
                        key: item.id,
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
  onChange: PropTypes.func.isRequired,
  /**
   * onBlur Handler for informing Formik of touched value
   */
  onBlur: PropTypes.func,
  /**
   * List of items to display in the dropdown
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ),
  /**
   * Options preselected item in dropdown
   */
  defaultInputValue: PropTypes.string,
  /**
   * Intitial placeholder for the dropdown
   */
  placeholder: PropTypes.string
};

Dropdown.defaultProps = {
  items: [],
  onBlur: () => {},
  defaultInputValue: '',
  placeholder: 'Select an item'
};

export default Dropdown;
