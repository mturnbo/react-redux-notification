import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../constants/notificationConstants';
import notification from '../state/notificationState';
import messages from '../messages';

export default function (state = notification, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      return {
        ...state,
        display: true,
        title: action.title ? action.title : randomMsg.title,
        message: action.message ? action.message : randomMsg.message
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        display: false
      };
    default:
      return state;
  }
}
