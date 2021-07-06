import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Locations from '../locations/locations';
import offersPropShape from '../../prop-validation/offers.prop';
import CardList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import offersList from '../../mocks/offers';

function Main (props) {
  const [selectedPoint, setSelectedPoint] = useState({});
  const onCardHover = (card) => setSelectedPoint(card);
  const {city,offers,addOffers} = props;
  // Затычка для добавления offers из моков
  addOffers(offersList);
  const filteredOffers = offers.filter((offer)=> offer.city.nameLocation === city);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex="0"
                >
                  Popular
                </li>
                <li className="places__option" tabIndex="0">
                  Price: low to high
                </li>
                <li className="places__option" tabIndex="0">
                  Price: high to low
                </li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>

            <CardList
              offers={filteredOffers}
              onCardHover={onCardHover}
            />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                offers={filteredOffers}
                selectedPoint={selectedPoint}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  addOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  addOffers(offersData) {
    dispatch(ActionCreator.addOffers(offersData));
  },
});

export {Main};
export default connect(mapStateToProps,mapDispatchToProps)(Main);
