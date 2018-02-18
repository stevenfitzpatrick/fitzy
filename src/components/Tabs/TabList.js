import PropTypes from 'prop-types';
import React from 'react';

const TabList = ({ activeIndex, onSelectTab, children }) => {
  const newChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: activeIndex === index,
      onSelect: () => onSelectTab(index)
    })
  );

  return <div>{newChildren}</div>;
};

TabList.propTypes = {
  onSelectTab: PropTypes.func,
  activeIndex: PropTypes.number
};

TabList.defaultProps = {
  activeIndex: 0
};

export default TabList;
