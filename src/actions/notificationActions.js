import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../constants/notificationConstants';

export const showNotification = (options = {}) => ({
  type: SHOW_NOTIFICATION,
  payload: options
});

export const closeNotification = (status) => ({
  type: HIDE_NOTIFICATION,
  payload: status
});
