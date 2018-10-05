import { UPDATE_NOTIFICATION } from '../constants/notificationConstants';
import notification from '../state/notificationState';

export default function (state = notification, action) {
  switch (action.type) {
    case UPDATE_NOTIFICATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
