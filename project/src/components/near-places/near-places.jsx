import React from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import Card from '../card/card';
import {OfferInfo} from '../../const';

function NearPlaces (props) {
  const {offers,numberOffers} = props;
  const nearPlaces = OfferInfo.cardTypeClass.nearPlaces;
  const cardImgWidth = OfferInfo.cardImgWidth.nearPlaces;
  const cardImgHeight = OfferInfo.cardImgHeight.nearPlaces;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers
          .slice (0, numberOffers)
          .map ((hotel) => (
            <Card
              key={`${nearPlaces}-${hotel.id}`}
              hotel={hotel}
              cardTypeClass={nearPlaces}
              cardImgWidth={cardImgWidth}
              cardImgHeight={cardImgHeight}
            />))}
      </div>
    </section>
  );
}

export default NearPlaces;

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  numberOffers: PropTypes.number.isRequired,
};
