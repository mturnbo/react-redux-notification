import {
  SET_NOTIFICATION,
  SHOW_NOTIFICATION
} from '../constants/notificationConstants';
import * as actions from './notificationActions';

const testSetNotification = {
  title: 'Test Notification',
  message: 'Notification has been set',
  display: false,
  delay: true
};

const testShowNotification = {
  title: 'Test Notification',
  message: 'Notification has been shown',
  display: true,
  delay: false
};

describe('actions', () => {
  it('should create an action to set a notification', () => {
    const expectedAction = {
      type: SET_NOTIFICATION,
      payload: testSetNotification,
    };
    expect(actions.setNotification(testSetNotification)).toEqual(expectedAction);
  });
  it('should create an action to show a notification', () => {
    const expectedAction = {
      type: SHOW_NOTIFICATION,
      payload: testShowNotification
    };
    expect(actions.showNotification(testShowNotification)).toEqual(expectedAction);
  });
});
