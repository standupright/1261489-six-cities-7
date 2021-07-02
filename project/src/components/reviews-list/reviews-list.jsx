import React from 'react';
import PropTypes from 'prop-types';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import Review from '../review/review';

function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};
