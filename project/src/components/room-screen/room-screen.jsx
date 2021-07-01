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

  return (
    <div className="page">
      <Header />
      <Room
        offers={offers}
        reviews={reviews}
        cardNumber={cardNumber}
        numberOffers={NEARBY_OFFERS}
      />
      <NearPlaces
        offers={offers}
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
