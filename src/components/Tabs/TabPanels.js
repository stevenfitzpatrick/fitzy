import PropTypes from 'prop-types';
import React from 'react';

const TabPanels = ({ activeIndex, children }) => (
  <div>{children[activeIndex]}</div>
);

TabPanels.propTypes = {
  activeIndex: PropTypes.number
};

TabPanels.defaultProps = {
  activeIndex: 0
};

export default TabPanels;
