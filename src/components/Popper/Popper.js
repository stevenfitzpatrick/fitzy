import Downshift from 'downshift';
import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import { DropDownMenu, DropDownOption } from '../Dropdown/Dropdown.styled';
import { PopperContainer } from './Popper.styled';

class Popper extends PureComponent {
  state = {};

  render() {
    const { children, itemToString, onChange, renderMenu } = this.props;
    return (
      <Downshift itemToString={itemToString} onChange={onChange}>
        {({
          getItemProps,
          getToggleButtonProps,
          getRootProps,
          getMenuProps,
          isOpen
        }) => (
          <PopperContainer {...getRootProps({ refKey: 'innerRef' })}>
            {children({ getToggleButtonProps })}
            {isOpen &&
              renderMenu({
                getItemProps,
                getMenuProps,
                itemToString,
                Menu: DropDownMenu,
                MenuItem: DropDownOption
              })}
          </PopperContainer>
        )}
      </Downshift>
    );
  }
}

Popper.propTypes = {
  itemToString: func,
  onChange: func
};

Popper.defaultProps = {
  itemToString: item => (item ? item.label : ''),
  onChange: () => {}
};

export default Popper;
