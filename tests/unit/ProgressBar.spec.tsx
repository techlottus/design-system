import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressBar from '../../packages/ProgressBar';

describe('ProgressBar.tsx', () => {
  it('Should match the snapshot', () => {
    const vm = shallow(<ProgressBar value={25} />);
    expect(vm).toMatchSnapshot();
  });

  it('the component ProgressBar has the correct className', () => {
    const vm = shallow(<ProgressBar value={30} />);
    expect(vm.props().className).toBe('w-full h-2 bg-surface-100 rounded');
  });

  it('when the component is created without a "variant" prop, the default variant is "primary"', () => {
    const vm = mount(<ProgressBar value={50} />);
    expect(vm.props().variant).toBe('primary');
  });

  it('when the component is created without a "variantAs" prop, the default variantAs is "200"', () => {
    const vm = mount(<ProgressBar value={50} /> );
    expect(vm.props().variantAs).toBe('200');
  });
});
