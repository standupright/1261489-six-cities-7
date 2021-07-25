import React, { useState } from 'react';
import {STARS_QUANTITY, CommentValidation, AuthStatus} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {postComment} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selector';
import ErrorMessage from '../error-message/error-message';

function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    rating: '0',
    comment: '',
  });
  const [isFormAvailable, setFormAvailable] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  const { id } = useParams();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  let isSubmitAvailable = false;

  if (
    isFormAvailable &&
    reviewData.rating >= CommentValidation.MIN_RATING &&
    reviewData.rating <= CommentValidation.MAX_RATING &&
    reviewData.comment.length >= CommentValidation.MIN_LENGTH &&
    reviewData.comment.length <= CommentValidation.MAX_LENGTH
  ) {
    isSubmitAvailable = true;
  }

  const resetForm = () => {
    setReviewData({
      rating: '0',
      comment: '',
    });
    setFormAvailable(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormAvailable) {
      setFormAvailable(false);

      dispatch(postComment(id, reviewData))
        .then(() => {
          isFormAvailable ?? resetForm();
        })
        .catch(() => {
          if (isFormAvailable) {
            setIsFailed(true);
            setFormAvailable(true);
          }
        });
    }
  };

  const createIdStars = () => {
    const idStars = [];
    for (let i = STARS_QUANTITY; i > 0; i--) {
      idStars.push(i);
    }
    return idStars;
  };

  return (
    authorizationStatus === AuthStatus.AUTH && (
      <form
        className='reviews__form form'
        action='#'
        method='post'
        onSubmit={handleSubmit}
      >
        <label className='reviews__label form__label' htmlFor='review'>
          Your review
        </label>
        <div className='reviews__rating-form form__rating'>
          {createIdStars().map((idStar) => (
            <React.Fragment key={idStar}>
              <input
                className='form__rating-input visually-hidden'
                name='rating'
                value={idStar}
                checked={idStar === Number(reviewData.rating)}
                id={`${idStar}-stars`}
                type='radio'
                onChange={handleChange}
                disabled={isFormAvailable ? '' : 'disabled'}
              />
              <label
                htmlFor={`${idStar}-stars`}
                className='reviews__rating-label form__rating-label'
                title='perfect'
              >
                <svg className='form__star-image' width='37' height='33'>
                  <use xlinkHref='#icon-star' />
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea
          className='reviews__textarea form__textarea'
          id='review'
          value={reviewData.comment}
          name='comment'
          placeholder='Tell how was your stay, what you like and what can be improved'
          disabled={isFormAvailable ? '' : 'disabled'}
          onChange={handleChange}
        />
        <div className='reviews__button-wrapper'>
          <p className='reviews__help'>
            To submit review please make sure to set{' '}
            <span className='reviews__star'>rating</span> and describe your stay
            with at least <b className='reviews__text-amount'>50 characters</b>.
          </p>
          <button
            className='reviews__submit form__submit button'
            type='submit'
            disabled={isSubmitAvailable ? '' : 'disabled'}
          >
            Submit
          </button>
        </div>
        {isFailed && <ErrorMessage />}
      </form>
    )
  );
}

export { ReviewForm };
export default ReviewForm;
