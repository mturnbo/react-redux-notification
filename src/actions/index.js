import { bindActionCreators } from 'redux';
import store from '../store';
import * as notificationActions from './notificationActions';

const actions = bindActionCreators({
  ...notificationActions
}, store.dispatch);

export default actions;
