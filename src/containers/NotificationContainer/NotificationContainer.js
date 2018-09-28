import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import actions from '../../actions';
import messages from './messages';
import './NotificationContainer.scss';

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.history.listen(() => this.props.notification.delay && this.showNotification());
  }

  formatMessage() {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    return {
      title: this.props.notification.title || randomMsg.title,
      message: this.props.notification.message || randomMsg.message
    };
  }

  setNotification() {
    actions.updateNotification({
      ...this.formatMessage(),
      display: false,
      delay: true
    });
  }

  showNotification() {
    actions.updateNotification({
      display: true,
      delay: false
    });
  }

  hideNotification() {
    actions.updateNotification({
      display: false
    });
  }

  render() {
    return (
      <div>
        {this.props.notification && <Notification {...this.props.notification} closeHandler={this.hideNotification} />}
        <button type="button" className="notification-button" onClick={this.showNotification}>SHOW NOTIFICATION</button>
        <button type="button" className="notification-button" onClick={this.setNotification}>SET NOTIFICATION</button>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  display: PropTypes.bool,
  delay: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    notification: state.notificationReducers
  };
};

export default withRouter(connect(mapStateToProps)(NotificationContainer));
