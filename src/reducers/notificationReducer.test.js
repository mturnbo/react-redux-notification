import {
  SET_NOTIFICATION,
  SHOW_NOTIFICATION
} from '../constants/notificationConstants';
import reducer from './notificationReducer';
import initialState from '../state/notificationState';

const testSetNotification = {
  title: 'Set Notification',
  message: 'Notification to be set'
};

const testShowNotification = {
  title: 'Show Notification',
  message: 'Notification to be shown'
};

describe('notification reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle set notification', () => {
    const expected = {
      ...testSetNotification,
      display: false,
      delay: true
    };
    expect(
      reducer({}, {
        type: SET_NOTIFICATION,
        ...testSetNotification
      })
    ).toEqual(expected);
  });

  it('should handle show notification', () => {
    const expected = {
      ...testShowNotification,
      display: true,
      delay: false
    };
    expect(
      reducer({}, {
        type: SHOW_NOTIFICATION,
        ...testShowNotification
      })
    ).toEqual(expected);
  });
});
