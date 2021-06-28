import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offersPropShape from '../../prop-validation/offers.prop';
import {OfferInfo} from '../../const';

function CardsList (props) {
  const {numberOffers, offers, onCardHover} = props;
  const city = OfferInfo.cardTypeClass.cities;
  const cardImgWidth = OfferInfo.cardImgWidth.cities;
  const cardImgHeight = OfferInfo.cardImgHeight.cities;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .slice (0, numberOffers)
        .map ((hotel) => (
          <Card
            key={`${city}-${hotel.id}`}
            hotel={hotel}
            cardTypeClass={city}
            cardImgWidth={cardImgWidth}
            cardImgHeight={cardImgHeight}
            onCardHover={onCardHover}
          />))}
    </div>
  );
}

export default CardsList;

CardsList.defaultProps = {
  onCardHover: () => {},
};

CardsList.propTypes = {
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  onCardHover: PropTypes.func,
};
