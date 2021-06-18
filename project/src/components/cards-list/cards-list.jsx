import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offersPropShape from '../../prop-validation/offers.prop';
import {OfferInfo} from '../../const';


function CardsList (props) {
  const [activeCard, setActiveCard] = useState({});
  const {numberOffers, offers} = props;
  const city = OfferInfo.cardTypeClass.cities;
  const cardImgWidth = OfferInfo.cardImgWidth.cities;
  const cardImgHeight = OfferInfo.cardImgHeight.cities;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .map ((hotel) =>
          <Card key={`${city}-${hotel.id}`} hotel={hotel} setActiveCard={setActiveCard} cardTypeClass={city} cardImgWidth={cardImgWidth} cardImgHeight={cardImgHeight}/>)
        .slice (0, numberOffers)}
    </div>
  );
}

export default CardsList;

CardsList.propTypes = {
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
};
