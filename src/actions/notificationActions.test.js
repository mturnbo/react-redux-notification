import { UPDATE_NOTIFICATION } from '../constants/notificationConstants';
import * as actions from './notificationActions';

const testNotification = {
  title: 'Notification title',
  message: 'Notification message'
};

describe('actions', () => {
  it('should create an action to update a notification', () => {
    const expectedAction = {
      type: UPDATE_NOTIFICATION,
      payload: testNotification,
    };
    expect(actions.updateNotification(testNotification)).toEqual(expectedAction);
  });
});
