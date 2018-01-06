import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state = {
    activeIndex: 0
  };

  selectedTabIndex = activeIndex => this.setState({ activeIndex });

  renderTabs() {
    const { data } = this.props;

    return data.map((tab, index) => {
      const isActive = this.state.activeIndex === index;
      return (
        <div
          key={index}
          className={isActive ? 'tab active' : 'tab'}
          onClick={() => this.selectedTabIndex(index)}
        >
          {tab.label}
        </div>
      );
    });
  }

  renderPanel() {
    const { data } = this.props;
    const { activeIndex } = this.state;
    return <div>{data[activeIndex].content}</div>;
  }

  render() {
    return (
      <div>
        <div className="tabs">{this.renderTabs()}</div>
        <div className="panels">{this.renderPanel()}</div>
      </div>
    );
  }
}

export default Tabs;
