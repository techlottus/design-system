import * as React from "react";
import { shallow } from 'enzyme';
import {HelloWorld} from '../packages';

test('Create HelloWorld component', () => {
  const component = shallow(
    <HelloWorld message="Hello everybody!"  />,
  );
  expect(component).toMatchSnapshot();
});