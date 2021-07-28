import React from 'react';
import PropTypes from 'prop-types';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import Review from '../review/review';
import { getMiliSeconds } from '../../utils/getAdaptDate';

function ReviewsList(props) {
  const {reviews} = props;
  const sortedReviews = [...reviews];
  sortedReviews.sort((a,b) => getMiliSeconds(a.date) - getMiliSeconds(b.date));

  return (
    <ul className="reviews__list">
      {sortedReviews
        .map((review) => (
          <Review key={review.id} review={review}/>
        ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};

export default ReviewsList;
