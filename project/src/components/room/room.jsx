import React from 'react';
import PropTypes from 'prop-types';
import Reviews from '../reviews/reviews';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import Map from '../map/map';
import offersPropShape from '../../prop-validation/offers.prop';
import { NUBMER_IMAGES, RATING_MAX, OfferTypes } from '../../const';

function Room (props) {
  const {room, reviews,  nearOffers, onFavoriteButtonClick} = props;
  const rating = `${Math.round (room.rating) * RATING_MAX}%`;
  const nearOffersForMap = [...nearOffers,room];

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {room.images
            .slice(0,NUBMER_IMAGES)
            .map ((imgSrc) => (
              <div
                key={imgSrc}
                className="property__image-wrapper"
              >
                <img
                  className="property__image"
                  width="260"
                  height="220"
                  src={imgSrc}
                  alt="Studio"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {room.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {room.title}
            </h1>
            <button
              className={`property__bookmark-button ${room.isFavorite ? 'property__bookmark-button--active' : ''} button`}
              type="button"
              onClick={() => onFavoriteButtonClick(room.id, room.isFavorite)}
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: rating}} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">
              {room.rating}
            </span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {OfferTypes[`${room.type}`] || 'Unknown'}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {room.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {room.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{room.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {room.goods.map ((good) => (
                <li
                  key={good}
                  className="property__inside-item"
                >
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src={room.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">
                {room.host.name}
              </span>
              {room.host.isPro &&
                <span className="property__user-status">
                  Pro
                </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {room.host.description}
              </p>
            </div>
          </div>
          <Reviews reviews={reviews}/>

        </div>
      </div>
      <section className="property__map map">
        <Map currentCity={room.city.name} offers={nearOffersForMap} selectedPoint={room.id}/>
      </section>
    </section>
  );
}


Room.defaultProps = {
  onFavoriteButtonClick: () => {},
};

Room.propTypes = {
  room: offersPropShape.isRequired,
  nearOffers: PropTypes.arrayOf(offersPropShape).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
  onFavoriteButtonClick: PropTypes.func,
};

export default Room;
