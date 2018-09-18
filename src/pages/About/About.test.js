import React from 'react';
import { mount } from 'enzyme';
import About from './index';

const wrapper = mount(<About />);

test('About Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
