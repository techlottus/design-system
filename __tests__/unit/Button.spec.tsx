import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../../packages/Button/index';
import Icon from '../../packages/Icon/index';

describe('Button.tsx', () => {
  it('should match the snapshot', () => {
    const vm = shallow(<Button variant='primary' size='md'>Button</Button>);
    expect(vm).toMatchSnapshot();
  });

  describe('Properties', () => {
    it('the component Button has to be a "button" tag', () => {
      const vm = shallow(<Button variant='primary' size='md'>Button</Button>);
      expect(vm.find('button')).toHaveLength(1);
    });

    it('the prop children has to be a string', () => {
      const vm = shallow(<Button variant='primary' size='md'>Button</Button>);
      expect(typeof vm.props().children).toBe('string');
    });

    it('the prop children accepts an Icon component as children', () => {
      const vm = shallow(
        <Button variant='secondary' size='md'>
          Button <Icon icon='fab fa-amazon'/>
        </Button>);
      expect(typeof vm.props().children).toBe('object');
    });

    it('test click event', () => {
      const mockCallBack = jest.fn();
      const vm = shallow(
      <Button variant='secondary' size='md' onClick={mockCallBack}>
        Click!
      </Button>);
      vm.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
