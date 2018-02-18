import React from 'react';
import { mount, shallow } from 'enzyme';

import Tabs from '../Tabs';

describe('Tabs', () => {
  let wrapper, mountedWrapper, firstTab, secondTab;

  const defaultProps = {
    defaultActiveIndex: 0
  };

  const component = (
    <Tabs {...defaultProps}>
      <Tabs.List>
        <Tabs.Tab>Cars</Tabs.Tab>
        <Tabs.Tab>Planes</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>My Cars</Tabs.Panel>
        <Tabs.Panel>My Plane</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );

  beforeEach(() => {
    wrapper = shallow(component);
    mountedWrapper = mount(component);
    firstTab = mountedWrapper.find('Tab').first();
    secondTab = mountedWrapper.find('Tab').last();
  });

  it('should render tabs', () => {
    expect(wrapper.instance()).toBeInstanceOf(Tabs);
    expect(wrapper.type()).toEqual('div');
  });

  it('should render tabs list and tabs panel', () => {
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.find('TabList')).toHaveLength(1);
    expect(wrapper.find('Tab')).toHaveLength(2);
    expect(wrapper.find('TabPanels')).toHaveLength(1);
    expect(wrapper.find('TabPanel')).toHaveLength(2);
  });

  describe('with active tab', () => {
    it('should set default active tab', () => {
      expect(mountedWrapper.find('TabList').props().activeIndex).toEqual(0);
      expect(firstTab.props().isActive).toBeTruthy();
      expect(secondTab.props().isActive).toBeFalsy();
    });

    it('should only show content for active tab', () => {
      expect(mountedWrapper.find('TabPanel').contains('My Cars')).toBeTruthy();
      expect(mountedWrapper.find('TabPanel')).toHaveLength(1);
    });
  });

  describe('with Tab Change', () => {
    it('should handle tab click and change content', () => {
      expect(mountedWrapper.state().activeIndex).toEqual(0);
      expect(mountedWrapper.find('TabPanel').contains('My Cars')).toBeTruthy();
      secondTab.simulate('click');
      expect(mountedWrapper.find('TabPanel').contains('My Plane')).toBeTruthy();
      expect(mountedWrapper.state().activeIndex).toEqual(1);
    });

    it('should call onSelect function when tab clicked', () => {
      const selectSpy = jest.spyOn(
        mountedWrapper.instance(),
        'selectedTabIndex'
      );
      expect(selectSpy).not.toHaveBeenCalled();
      secondTab.simulate('click');
      secondTab.children().simulate('click');
      expect(selectSpy).toHaveBeenCalled();
    });
  });

  describe('with disabled Tab', () => {
    beforeEach(() => {
      mountedWrapper = mount(
        <Tabs {...defaultProps}>
          <Tabs.List>
            <Tabs.Tab>Cars</Tabs.Tab>
            <Tabs.Tab isDisabled>Planes</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>My Cars</Tabs.Panel>
            <Tabs.Panel>My Plane</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      );
    });

    it('should have disabled state when isDisabled', () => {
      const activeTab = mountedWrapper.find('Tab').first();
      const disabledTab = mountedWrapper.find('Tab').last();
      // Active Tab
      expect(activeTab.props().isDisabled).toBeFalsy();
      expect(activeTab.children().props().onClick).toEqual(
        expect.any(Function)
      );

      // Disabled Tab
      expect(disabledTab.props().isDisabled).toBeTruthy();
      expect(disabledTab.children().hasClass('disabled')).toBeTruthy();
      expect(disabledTab.children().props().onClick).toBeNull();
    });
  });
});
