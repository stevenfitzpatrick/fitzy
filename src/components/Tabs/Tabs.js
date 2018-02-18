import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabPanels from './TabPanels';

export class Tabs extends Component {
  initialState = {
    activeIndex: this.props.defaultActiveIndex
  };

  state = this.initialState;

  selectedTabIndex = activeIndex => this.setState({ activeIndex });

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        activeIndex: this.state.activeIndex,
        onSelectTab: this.selectedTabIndex
      })
    );
    return <div>{children}</div>;
  }
}

Tabs.propTypes = {
  defaultActiveIndex: PropTypes.number
};

Tabs.defaultProps = {
  defaultActiveIndex: 0
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
