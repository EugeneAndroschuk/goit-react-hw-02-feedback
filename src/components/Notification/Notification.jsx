import PropTypes from 'prop-types';

const Notification = (props) => {
    const {message} = props;

  return <div>{message}</div>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;