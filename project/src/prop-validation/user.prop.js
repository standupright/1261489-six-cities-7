import PropTypes from 'prop-types';

const userPropShape = PropTypes.shape ({
  avatarUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequiredm,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
});

export default userPropShape;

