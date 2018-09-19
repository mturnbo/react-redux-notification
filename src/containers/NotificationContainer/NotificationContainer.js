import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import actions from '../../actions';
import './NotificationContainer.scss';

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.history.listen(() => this.props.notification.delay && this.showNotification());
  }

  setNotification() {
    actions.setNotification();
  }

  showNotification() {
    actions.showNotification();
  }

  hideNotification() {
    actions.hideNotification();
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
  display: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    notification: state.notificationReducers
  };
};

export default withRouter(connect(mapStateToProps)(NotificationContainer));
