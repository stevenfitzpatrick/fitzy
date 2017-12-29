import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
   * onChange Handler sending updated value
   */
    onChange: PropTypes.func,
    /**
   * Name of the field
   */
    name: PropTypes.string,
    /**
   * Current Value of the field
   */
    value: PropTypes.string.isRequired,
    /**
   * Current Value of the field
   */
    isChecked: PropTypes.bool,
    /**
   * Current Value of the field
   */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const defaultProps = {
    isChecked: false
};

const RadioOption = ({ isChecked, value, onChange, name, children }) => (
    <label htmlFor={value}>
        <input
            type="radio"
            checked={isChecked}
            value={value}
            onChange={onChange}
            name={name}
            id={value}
        />
        {children}
    </label>
);

RadioOption.propTypes = propTypes;
RadioOption.defaultProps = defaultProps;

export default RadioOption;
