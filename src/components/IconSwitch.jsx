import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  const {icon, onSwitch} = props;
  return (
    <span className="material-icons" onClick={onSwitch}>
      {icon}
    </span>
  )
}
IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired
}
