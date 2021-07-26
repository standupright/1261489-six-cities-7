import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import {OfferInfo,RATING_MAX} from '../../const';

function Card (props) {
  const {
    hotel,
    onCardHover,
    cardTypeClass,
    cardImgWidth,
    cardImgHeight,
    onFavoriteButtonClick,
  } = props;

  const {
    id,
    previewImage,
    isFavorite,
    isPremium,
    price,
    title,
    type,
    rating} = hotel;

  const citiesClass = OfferInfo.cardTypeClass.cities;
  const ratingStars = `${Math.round(rating) * RATING_MAX}%`;
  return (
    <article className={`${cardTypeClass}__place-card place-card`}
      onMouseEnter={() => onCardHover(id)}
      onMouseLeave={()=> onCardHover(null)}
    >
      {isPremium && cardTypeClass === citiesClass &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${cardTypeClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardImgWidth}
            height={cardImgHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardTypeClass}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{price}
            </b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''}  button`}
            type="button"
            onClick={() => onFavoriteButtonClick(id,isFavorite)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

Card.defaultProps = {
  onCardHover: () => {},
  onFavoriteButtonClick: () => {},
};

Card.propTypes = {
  hotel: offersPropShape.isRequired,
  onCardHover: PropTypes.func,
  cardTypeClass: PropTypes.string.isRequired,
  cardImgWidth: PropTypes.number.isRequired,
  cardImgHeight: PropTypes.number.isRequired,
  onFavoriteButtonClick: PropTypes.func,
};

export {Card};
export default Card;
