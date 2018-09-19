import React from 'react';
import { connect } from 'react-redux';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import actions from '../../actions';
import './NotificationContainer.scss';

class NotificationContainer extends React.Component {
  showNotification() {
    actions.showNotification();
  }

  hideNotification() {
    actions.hideNotification();
  }

  render() {
    return (
      <div>
        <Notification {...this.props.notification} closeHandler={this.hideNotification} />
        <button type="button" className="notification-button" onClick={this.showNotification}>SHOW NOTIFICATION</button>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  display: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    notification: state.notificationReducers
  }
};

export default connect(mapStateToProps)(NotificationContainer);
