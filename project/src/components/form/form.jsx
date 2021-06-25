import React, {useState} from 'react';
import {STARS_QUANTITY} from '../../const';

function ReviewForm (props) {
  const [reviewData, setReviewData] = useState({
    rating: '0',
    review: '',
  });

  const  handleChange = (evt) => {
    const {name, value} = evt.target;
    setReviewData({[name]: value});
  };

  const handleSubmit = (evt) => {
    //alert ('Форма отправлена');
    evt.preventDefault ();
  };

  const createIdStars = () => {
    const idStars = [];
    for (let i = STARS_QUANTITY; i > 0; i--) {
      idStars.push(i);
    }
    return idStars;
  };

  return (
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
        name="review"
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
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
