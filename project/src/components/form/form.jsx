import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {STARS_QUANTITY, CommentValidation, AuthStatus} from '../../const';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import { useParams } from 'react-router-dom';


function ReviewForm (props) {
  const [reviewData, setReviewData] = useState({
    rating: '0',
    comment: '',
  });
  const {id} = useParams();

  const {authorizationStatus,postReview} = props;

  const  handleChange = (evt) => {
    const {name, value} = evt.target;
    setReviewData({...reviewData, [name]: value});
  };

  let isSubmitAvailable = false;

  if (
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
  };

  const handleSubmit = (evt) => {
    //alert ('Форма отправлена');
    evt.preventDefault ();
    postReview(id, reviewData).then(() => resetForm());
  };

  const createIdStars = () => {
    const idStars = [];
    for (let i = STARS_QUANTITY; i > 0; i--) {
      idStars.push(i);
    }
    return idStars;
  };

  return ( authorizationStatus === AuthStatus.AUTH &&
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit = {handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {createIdStars().map( (idStar) => (
          <React.Fragment key={idStar}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={idStar}
              checked={idStar === Number(reviewData.rating)}
              id={`${idStar}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${idStar}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        value={reviewData.comment}
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          {' '}
          <span className="reviews__star">rating</span>
          {' '}
          and describe your stay with at least
          {' '}
          <b className="reviews__text-amount">50 characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitAvailable ? '' : 'disabled'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  postReview(id,postCommentData) {
    return dispatch(postComment(id,postCommentData));
  },
});

export { ReviewForm };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
