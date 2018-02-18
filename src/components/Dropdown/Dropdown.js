import React from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { dropdownStyles, menuStyles, buttonStyles } from './styles';

const Dropdown = ({ items, onChange, onBlur }) => {
  const classNames = classnames(dropdownStyles);
  return (
    <Downshift
      onChange={onChange}
      itemToString={i => (i ? i.name : '')}
      render={({
        getInputProps,
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
          <input {...getInputProps()} type="hidden" />
          <button
            onClick={toggleMenu}
            {...getButtonProps({ onBlur })}
            className={buttonStyles}
          />
          <span className="text">
            {inputValue ? inputValue : 'Select an item'}
          </span>
          {isOpen ? (
            <div className={menuStyles}>
              {items.map((item, index) => (
                <div
                  {...getItemProps({ item })}
                  key={item.id}
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? 'gray' : 'white',
                    fontWeight:
                      selectedItem && selectedItem.id === item.id
                        ? 'bold'
                        : 'normal'
                  }}
                >
                  {itemToString(item)}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    />
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  items: PropTypes.array
};

Dropdown.defaultProps = {
  items: [],
  onBlur: () => {}
};

export default Dropdown;
