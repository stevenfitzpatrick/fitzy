import PropTypes from 'prop-types';
import React from 'react';

import { TooltipArrow, TooltipInner, TooltipWrapper } from './Tooltip.styled';

class Tooltip extends React.Component {
  childRef = React.createRef();
  tooltipRef = React.createRef();

  state = {
    isHovered: false,
    top: 0,
    left: 0
  };

  _calculatePositions = () => {
    const { placement } = this.props;
    const arrowHeight = 15;
    const {
      offsetWidth: tooltipWidth,
      offsetHeight: tooltipHeight
    } = this.tooltipRef.current;
    const {
      offsetLeft,
      offsetTop,
      offsetHeight,
      offsetWidth
    } = this.childRef.current;

    const difference = (tooltipWidth - offsetWidth) / 2;
    const heightDifference = (tooltipHeight - offsetHeight) / 2;

    let top, left;
    switch (placement) {
    case 'top':
      top = offsetTop - tooltipHeight - arrowHeight;
      left = offsetLeft - difference;
      break;
    case 'bottom':
      top = offsetTop + offsetHeight + arrowHeight;
      left = offsetLeft - difference;
      break;
    case 'right':
      top = offsetTop - heightDifference;
      left = offsetLeft + offsetWidth + arrowHeight;
      break;
    case 'left':
      top = offsetTop - heightDifference;
      left = offsetLeft - tooltipWidth - arrowHeight;
      break;
    }

    this.setState({
      top,
      left
    });
  };

  componentDidMount() {
    this._calculatePositions();
    window.addEventListener('resize', this._calculatePositions, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._calculatePositions, false);
  }

  toggle = () =>
    requestAnimationFrame(() =>
      this.setState(({ isHovered }) => ({
        isHovered: !isHovered
      }))
    );

  render() {
    const { children, content, open, placement, id, use } = this.props;
    const { isHovered, top, left } = this.state;
    const visible = open ? true : isHovered;
    return (
      <React.Fragment>
        <TooltipWrapper
          left={left}
          top={top}
          show={visible}
          innerRef={this.tooltipRef}
          id={id}
          use={use}
        >
          <TooltipInner use={use}>
            <TooltipArrow placement={placement} />
            {content}
          </TooltipInner>
        </TooltipWrapper>
        {React.cloneElement(children, {
          innerRef: this.childRef,
          onMouseEnter: this.toggle,
          onMouseLeave: this.toggle,
          'aria-describedby': id
        })}
      </React.Fragment>
    );
  }
}

Tooltip.propTypes = {
  /**
   * ID for the tooltip, must be unique
   */
  id: PropTypes.string.isRequired,
  /**
   * Select initial placement for the tooltip
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Set theme
   */
  use: PropTypes.oneOf([
    'Primary',
    'Secondary',
    'Success',
    'Warning',
    'Error',
    'Info',
    'Light'
  ]),
  /**
   * Element to toggle tooltip
   */
  children: PropTypes.node,
  /**
   * Tooltip content
   */
  content: PropTypes.node,
  /**
   * Should tooltip always be visible ?
   */
  open: PropTypes.bool
};

Tooltip.defaultProps = {
  use: 'Primary',
  placement: 'top',
  open: false
};

export default Tooltip;
