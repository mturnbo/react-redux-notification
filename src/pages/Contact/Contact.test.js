import React from 'react';
import { mount } from 'enzyme';
import Contact from './index';

const wrapper = mount(<Contact />);

test('Contact Page Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
