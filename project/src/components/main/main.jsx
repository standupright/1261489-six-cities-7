import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Locations from '../locations/locations';
import offersPropShape from '../../prop-validation/offers.prop';
import CardList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import Sorting from '../sorting/sorting';
import {SortingTypes} from '../../const';

function Main (props) {
  const [selectedPoint, setSelectedPoint] = useState({});
  const [sortType, setSortType] = useState(SortingTypes.POPULAR);
  const onCardHover = (card) => setSelectedPoint(card);
  const {city,offers} = props;
  const offersList = offers.filter((offer)=> offer.city.nameLocation === city);

  switch (sortType) {
    case SortingTypes.LOW_TO_HIGH:
      offersList.sort((a, b) => a.price - b.price);
      break;
    case SortingTypes.HIGH_TO_LOW:
      offersList.sort((a, b) => b.price - a.price);
      break;
    case SortingTypes.TOP_RATED:
      offersList.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

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
            <b className="places__found">{offersList.length} places to stay in {city}</b>
            <Sorting
              sortType={sortType}
              onSortingChange={setSortType}
              sortingTypes={SortingTypes}
            />

            <CardList
              offers={offersList}
              onCardHover={onCardHover}
            />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                offers={offersList}
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {Main};
export default connect(mapStateToProps)(Main);
