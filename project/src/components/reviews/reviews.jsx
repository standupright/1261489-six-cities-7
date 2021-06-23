import React from 'react';
import PropTypes from 'prop-types';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import {RATING_MAX} from '../../const';
import Form from '../form/form';

function Reviews (props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map ( (comment) => (
          <li key={comment.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={comment.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${comment.rating / RATING_MAX}%`}} />
                  <span className="visually-hidden">{comment.rating}</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">
                {comment.date}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};
