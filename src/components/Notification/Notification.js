import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = props => {
  let notificationClass = 'notification';
  notificationClass += props.display ? ' show' : '';
  return (
    <div className={notificationClass}>
      <button type="button" className="notification-close" onClick={props.closeHandler}>X</button>
      <div className="notification-title">{props.title}</div>
      <div className="notification-message">{props.message}</div>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default Notification;
