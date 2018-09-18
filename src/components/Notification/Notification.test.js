import React from 'react';
import { mount } from 'enzyme';
import Notification from './index';

const mockHandler = jest.fn();

const wrapper = mount(<Notification title="Test" message="Blah blah blah" display={true} closeHandler={mockHandler} />);

test('Notification Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
