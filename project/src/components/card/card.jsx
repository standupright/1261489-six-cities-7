import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import {AppRoute,OfferInfo,RATING_MAX} from '../../const';

function Card ({hotel,onCardHover,cardTypeClass,cardImgWidth,cardImgHeight}) {
  const {
    id,
    previewImage,
    isPremium,
    price,
    title,
    type,
    rating} = hotel;

  const citiesClass = OfferInfo.cardTypeClass.cities;
  const ratingStars = `${Math.round(rating) / RATING_MAX}%`;
  return (
    <article className={`${cardTypeClass}__place-card place-card`}
      onMouseEnter={() => onCardHover(hotel)}
      onMouseLeave={()=> onCardHover({})}
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
          <button className="place-card__bookmark-button button" type="button">
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
          <Link to={`${AppRoute.OFFER}/${id}`}>
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

export default Card;

Card.defaultProps = {
  onCardHover: () => {},
};

Card.propTypes = {
  hotel: PropTypes.shape(offersPropShape).isRequired,
  onCardHover: PropTypes.func,
  cardTypeClass: PropTypes.string.isRequired,
  cardImgWidth: PropTypes.number.isRequired,
  cardImgHeight: PropTypes.number.isRequired,
};
