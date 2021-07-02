import PropTypes from 'prop-types';

const reviewsPropShape = PropTypes.shape ({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape ({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequiredm,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
}).isRequired;

export default reviewsPropShape;

