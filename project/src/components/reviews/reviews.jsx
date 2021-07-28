import React from 'react';
import PropTypes from 'prop-types';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';

import { NUMBER_REVIEWS } from '../../const';

function Reviews (props) {
  const {reviews} = props;
  const sortedReviews = [...reviews].sort((a,b) => a.date < b.date ? 1 : -1);
  const limitedReviews = sortedReviews.slice(0,NUMBER_REVIEWS);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span>
      </h2>
      <ReviewsList reviews={limitedReviews} />
      <ReviewForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};

export default Reviews;
