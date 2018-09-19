import {
  SET_NOTIFICATION,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../constants/notificationConstants';

export const setNotification = (options = {}) => ({
  type: SET_NOTIFICATION,
  payload: options
});

export const showNotification = (options = {}) => ({
  type: SHOW_NOTIFICATION,
  payload: options
});

export const hideNotification = (status) => ({
  type: HIDE_NOTIFICATION,
  payload: status
});
