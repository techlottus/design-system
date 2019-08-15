import * as React from 'react';
import { shallow } from 'enzyme';
import Icon from '../../packages/Icon/index';

describe('Icon.tsx', () => {
  it('should match the snapshot', () => {
    const vm = shallow(<Icon icon={'fab fa-amazon'} size={'12px'} state={'text-neutral'} />);
    expect(vm).toMatchSnapshot();
  });

  describe('Properties', () => {
    it('the element of the icon has to be a "i" tag', () => {
      const vm = shallow(<Icon icon='fab fa-amazon' />);
      expect(vm.find('i')).toHaveLength(1);
    });

    it('when the component is created without a "size" prop, the default size is 12px', () => {
      const vm = shallow(<Icon icon='fab fa-amazon' />);
      expect(vm.props().children.props.style).toEqual({fontSize: '12px'});
    });

    it('when the component is created without a "state" prop, the default state is text-neutral', () => {
      const vm = shallow(<Icon icon='fab fa-amazon' />);
      expect(vm.props().children.props.className).toMatch('text-neutral');
    });

    it('when the component is created without a "className" prop, the default className should be an empty string', () => {
      const vm = shallow(<Icon icon='fab fa-amazon' />);
      expect(vm.props().children.props.className).toMatch('');
    });
  });
});
