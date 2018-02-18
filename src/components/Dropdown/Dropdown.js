import classnames from 'classnames';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import React from 'react';

import { buttonStyles, dropdownStyles, menuStyles } from './styles';

const Dropdown = ({
  items,
  onChange,
  onBlur,
  defaultInputValue,
  placeholder
}) => {
  const classNames = classnames(dropdownStyles);
  return (
    <Downshift
      onChange={onChange}
      defaultInputValue={defaultInputValue}
      itemToString={i => (i ? i.name : '')}
      render={({
        getItemProps,
        getButtonProps,
        itemToString,
        isOpen,
        toggleMenu,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div className={classNames}>
          <button
            onClick={toggleMenu}
            {...getButtonProps({ onBlur, className: buttonStyles })}
          />
          <span className="text">{inputValue ? inputValue : placeholder}</span>
          {isOpen && (
            <div className={menuStyles}>
              {items.map((item, index) => {
                const itemClassnames = classnames({
                  selected: selectedItem && selectedItem.id === item.id,
                  active: highlightedIndex === index
                });
                return (
                  <div
                    {...getItemProps({
                      item,
                      key: item.id,
                      className: itemClassnames
                    })}
                  >
                    {itemToString(item)}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    />
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
