import React from 'react';
import { mount } from 'enzyme';

import SetList from '../SetList';

describe('SetList', () => {
  const teams = ['France', 'Croatia', 'England', 'Belgium'];

  const Child = jest.fn(({ list }) => (
    <div>
      {Array.from(list).map(country => <div key={country}>{country}</div>)}
    </div>
  ));

  describe('Init Props', () => {
    it('should pass correct props to children', () => {
      const wrapper = mount(<SetList list={teams}>{Child}</SetList>);
      expect(Child).toHaveBeenCalledWith(
        expect.objectContaining({
          add: expect.any(Function),
          clear: expect.any(Function),
          remove: expect.any(Function),
          list: new Set(teams)
        })
      );
    });
  });
});
