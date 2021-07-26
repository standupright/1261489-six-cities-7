import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offersPropShape from '../../prop-validation/offers.prop';
import {OfferInfo} from '../../const';

function CardsList (props) {
  const {offers, onCardHover, onFavoriteButtonClick} = props;
  const city = OfferInfo.cardTypeClass.cities;
  const cardImgWidth = OfferInfo.cardImgWidth.cities;
  const cardImgHeight = OfferInfo.cardImgHeight.cities;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .map ((hotel) => (
          <Card
            key={`${city}-${hotel.id}`}
            hotel={hotel}
            cardTypeClass={city}
            cardImgWidth={cardImgWidth}
            cardImgHeight={cardImgHeight}
            onCardHover={onCardHover}
            onFavoriteButtonClick = {onFavoriteButtonClick}
          />))}
    </div>
  );
}

CardsList.defaultProps = {
  onCardHover: () => {},
  onFavoriteButtonClick: () => {},
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  onCardHover: PropTypes.func,
  onFavoriteButtonClick: PropTypes.func,
};

export default CardsList;
