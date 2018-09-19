import {
  SET_NOTIFICATION,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../constants/notificationConstants';
import notification from '../state/notificationState';
import messages from '../messages';

export default function (state = notification, action) {
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        display: false,
        title: action.title || randomMsg.title,
        message: action.message || randomMsg.message,
        delay: true
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        display: true,
        title: action.title || randomMsg.title,
        message: action.message || randomMsg.message,
        delay: false
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        title: '',
        message: '',
        display: false,
        delay: false
      };
    default:
      return state;
  }
}
