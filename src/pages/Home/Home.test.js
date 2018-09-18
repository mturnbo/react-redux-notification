import React from 'react';
import { mount } from 'enzyme';
import Home from './index';

const wrapper = mount(<Home />);

test('Home Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
