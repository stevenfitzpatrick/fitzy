import classnames from 'classnames';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';
import React, { Component } from 'react';
import { array, func, object, oneOfType, string } from 'prop-types';

import {
  DropDownContainer,
  DropDownIcon,
  DropDownMenu,
  DropDownOption
} from '../Dropdown/Dropdown.styled';

import { Input, InputClose, InputContainer } from './Autocomplete.styled';

class AutoComplete extends Component {
  inputRef = React.createRef();

  getItems = value => {
    const { items } = this.props;
    return value ? matchSorter(items, value, { keys: ['label'] }) : items;
  };

  handleClearSelection = clearSelection => () => {
    clearSelection();
    this.inputRef.current.focus();
  };

  render() {
    const {
      itemToString,
      inputId,
      defaultInputValue,
      defaultSelectedItem,
      onChange,
      onBlur,
      placeholder
    } = this.props;

    return (
      <Downshift
        onChange={onChange}
        defaultInputValue={defaultInputValue}
        defaultSelectedItem={defaultSelectedItem}
        itemToString={itemToString}
        inputId={inputId}
      >
        {({
          clearSelection,
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
            <InputContainer>
              <Input
                {...getInputProps({ innerRef: this.inputRef, placeholder })}
              />
              {selectedItem ? (
                <InputClose
                  onClick={this.handleClearSelection(clearSelection)}
                  aria-label="clear selection"
                >
                  <DropDownIcon icon="close" size="22" />
                </InputClose>
              ) : (
                <DropDownIcon
                  icon="arrow"
                  size="22"
                  {...getToggleButtonProps({
                    onBlur,
                    isOpen
                  })}
                />
              )}
            </InputContainer>

            {isOpen && (
              <React.Fragment>
                <DropDownMenu {...getMenuProps({ refKey: 'innerRef' })}>
                  {this.getItems(inputValue).map((item, index) => {
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
  }
}

AutoComplete.propTypes = {
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
  inputId: string,
  /**
   * Intitial placeholder for the dropdown
   */
  defaultInputValue: string,
  /**
   * Object Options preselected item in dropdown
   */
  defaultSelectedItem: oneOfType([string, object])
};

AutoComplete.defaultProps = {
  defaultInputValue: '',
  placeholder: 'Select an item',
  defaultSelectedItem: null,
  items: [],
  inputId: null,
  itemToString: i => (i == null ? '' : String(i)),
  onBlur: () => {}
};

export default AutoComplete;
