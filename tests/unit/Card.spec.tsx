import * as React from 'react';
import { shallow } from 'enzyme';
import Card from '../../packages/Card';
import CardHeader from '../../packages/Card/CardHeader';

describe('Card.tsx', () => {
  it('Should match the snapshot', () => {
    const vm = shallow(<Card><h1>New Card</h1></Card>);
    expect(vm).toMatchSnapshot();
  });

  it('The component Card has the correct classname', () => {
    const vm = shallow(<Card><h1>New Card</h1></Card>);
    expect(vm.props().className).toBe('max-w-sm rounded overflow-hidden shadow-up-box mx-auto');
  });

  it('The prop children accepts a CardHeader component as children', () => {
    const vm = shallow(<Card><CardHeader><h1>New Card with header</h1></CardHeader></Card>);
    expect(typeof vm.props().children).toBe('object');
  });
});
