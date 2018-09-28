import { UPDATE_NOTIFICATION } from '../constants/notificationConstants';

export const updateNotification = (options = {}) => ({
  type: UPDATE_NOTIFICATION,
  payload: options
});
