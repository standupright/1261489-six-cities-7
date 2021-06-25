import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offersPropShape from '../../prop-validation/offers.prop';
import {OfferInfo} from '../../const';

function FavoritesScreen (props) {
  const {offers} = props;
  const favorite = OfferInfo.cardTypeClass.favorite;
  const cardImgWidth = OfferInfo.cardImgWidth.favorite;
  const cardImgHeight = OfferInfo.cardImgHeight.favorite;

  const cities = {};

  offers
    .map((offer)=> cities[`${offer.city.nameLocation}`] = []);
  offers
    .map((offer) => cities[`${offer.city.nameLocation}`].push(offer));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(cities)
          .map( (nameCity)=> (
            <li key={nameCity} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{nameCity}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cities[`${nameCity}`]
                  .map ((hotel) =>
                    <Card key={`${hotel.city.nameLocation + favorite + hotel.id}`} hotel={hotel} cardTypeClass={favorite} cardImgWidth={cardImgWidth} cardImgHeight={cardImgHeight}/>)}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
};

export default FavoritesScreen;
