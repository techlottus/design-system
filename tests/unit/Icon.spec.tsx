import * as React from 'react';
import { shallow } from 'enzyme';
import Icon from '../../packages/Icon/index';

describe('Icon.tsx', () => {
  it('should match the snapshot', () => {
    const vm = shallow(<Icon size='14px' className={'fab fa-amazon text-neutral'} />);
    expect(vm).toMatchSnapshot();
    expect(vm.find('i').hasClass('fab fa-amazon text-neutral')).toBe(true);
    expect(vm.find('i').hasClass('fab fa-amazon text-warning')).toBe(false);
    expect(vm.props().children.props.className).toEqual('fab fa-amazon text-neutral');
    expect(vm.props().children.props.style).toEqual({fontSize: '14px'});
    console.log('props: ', vm.props());
  });
});
