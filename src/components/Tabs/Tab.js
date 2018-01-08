import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tab = ({ children, isDisabled, isActive, onSelect }) => {
  const className = classnames({ active: isActive, disabled: isDisabled });
  const onClick = isDisabled ? null : onSelect;

  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      className={className}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  onSelect: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool
};

Tab.defaultProps = {
  isDisabled: false,
  isActive: false
};

export default Tab;
