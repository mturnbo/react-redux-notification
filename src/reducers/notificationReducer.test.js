import { UPDATE_NOTIFICATION } from '../constants/notificationConstants';
import reducer from './notificationReducer';
import initialState from '../state/notificationState';

const testNotification = {
  title: 'Notification title',
  message: 'Notification message',
  display: true,
  delay: false
};

describe('notification reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle update notification', () => {
    const expected = {
      ...testNotification
    };
    expect(
      reducer({}, {
        type: UPDATE_NOTIFICATION,
        ...testNotification
      })
    ).toEqual(expected);
  });
});
