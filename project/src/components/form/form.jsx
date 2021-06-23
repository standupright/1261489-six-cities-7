import React from 'react';
import {STARS_QUANTITY} from '../../const';

class ReviewForm extends React.PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      rating: '0',
      review: '',
    };

    this.handleSubmit = this.handleSubmit.bind (this);
    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  handleSubmit (evt) {
    alert ('Форма отправлена');
    evt.preventDefault ();
  }

  createIdStars () {
    const idStars = [];
    for (let i = STARS_QUANTITY; i > 0; i--) {
      idStars.push(i);
    }
    return idStars;
  }

  render () {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit = {this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {this.createIdStars().map( (idStar) => (
            <React.Fragment key={idStar}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={idStar}
                id={`${idStar}-stars`}
                type="radio"
                onChange={this.handleChange}
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
          onChange={this.handleChange}
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
}

export default ReviewForm;
