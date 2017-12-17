import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Input Button Example
 */
class Input extends Component {
    static propTypes = {
        value: PropTypes.string
    };

    render() {
        return (
            <div>
                <label>Text</label>
                <input type="text" className="lol" value={this.props.value} />
            </div>
        );
    }
}

export default Input;
