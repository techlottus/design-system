import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../../packages/HelloWorld/index';

describe('HelloWorld.tsx', () => {
  it('should match the snapshot', () => {
    const vm = shallow(<HelloWorld message="Hello everybody!" />);
    expect(vm).toMatchSnapshot();
  });
});
