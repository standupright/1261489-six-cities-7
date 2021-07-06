import React from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import {NEARBY_OFFERS} from '../../const';
import Room from '../room/room';
import Header from '../header/header';
import NearPlaces from '../near-places/near-places';

function RoomScreen (props) {
  const {offers,reviews,cardNumber} = props;
  const room = offers[cardNumber - 1];
  const limitedOffers = offers.slice(0,NEARBY_OFFERS);
  return (
    <div className="page">
      <Header />
      <Room
        room={room}
        nearOffers={limitedOffers}
        reviews={reviews}
        cardNumber={cardNumber}
      />
      <NearPlaces
        nearOffers={limitedOffers}
        numberOffers={NEARBY_OFFERS}
      />
    </div>
  );
}

export default RoomScreen;

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
  cardNumber: PropTypes.string.isRequired,
};
