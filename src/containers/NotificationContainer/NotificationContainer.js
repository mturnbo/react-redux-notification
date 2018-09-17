import React from 'react';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display
    };
    this.showNotification = this.showNotification.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }

  showNotification() {
    this.setState({
      display: true
    });
  }

  hideNotification() {
    this.setState({
      display: false
    });
  }

  render() {
    return (
      <div>
        <Notification {...this.props} display={this.state.display} closeHandler={this.hideNotification} />
        <button type="button" onClick={this.showNotification}>SHOW NOTIFICATION</button>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  display: PropTypes.bool
};

NotificationContainer.defaultProps = {
  title: 'NOTIFICATION',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
      + ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
      + ' ea commodo consequat.',
  display: false
};


export default NotificationContainer;
