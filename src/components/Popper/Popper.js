import classnames from 'classnames';
import Downshift from 'downshift';
import React, { Fragment, PureComponent } from 'react';
import { array, func, object, oneOfType, string } from 'prop-types';

class Popper extends PureComponent {
  state = {};

  render() {
    const { children, itemToString, onChange, renderMenu } = this.props;
    return (
      <Downshift itemToString={itemToString} onChange={onChange}>
        {({ getItemProps, getToggleButtonProps, getMenuProps, isOpen }) => (
          <div>
            {children({ getToggleButtonProps })}
            {isOpen && renderMenu({ getItemProps, getMenuProps, itemToString })}
          </div>
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