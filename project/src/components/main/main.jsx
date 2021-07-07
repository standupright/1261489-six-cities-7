import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Locations from '../locations/locations';
import offersPropShape from '../../prop-validation/offers.prop';
import CardList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import Sorting from '../sorting/sorting';
import {SortingType} from '../../const';

function Main (props) {
  const [selectedPoint, setSelectedPoint] = useState({});
  const [sortType, setSortType] = useState(SortingType.POPULAR);
  const onCardHover = (card) => setSelectedPoint(card);
  const {city,offers} = props;
  const offersByCity = offers.filter((offer)=> offer.city.nameLocation === city);

  switch (sortType) {
    case SortingType.LOW_TO_HIGH:
      offersByCity.sort((a, b) => a.price - b.price);
      break;
    case SortingType.HIGH_TO_LOW:
      offersByCity.sort((a, b) => b.price - a.price);
      break;
    case SortingType.TOP_RATED:
      offersByCity.sort((a, b) => b.rating - a.rating);
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
            <b className="places__found">{offersByCity.length} places to stay in {city}</b>
            <Sorting
              currentType={sortType}
              onSortingChange={setSortType}
              sortingTypes={SortingType}
            />

            <CardList
              offers={offersByCity}
              onCardHover={onCardHover}
            />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                offers={offersByCity}
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
