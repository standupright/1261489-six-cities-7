import React from 'react';
import PropTypes from 'prop-types';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';

function Reviews (props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};

export default Reviews;
