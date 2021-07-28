import React, { useEffect, useMemo, useState } from 'react';
import Locations from '../locations/locations';
import CardList from '../cards-list/cards-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import { SortingType } from '../../const';
import Spinner from '../spinner/spinner';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import { getfilteredOffers, getIsDataLoaded } from '../../store/offers/selector';
import { getCity } from '../../store/cities/selector';
import { getOffersList, postFavorite } from '../../store/api-actions';

function Main() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [sortType, setSortType] = useState(SortingType.POPULAR);
  const onCardHover = (cardId) => setSelectedPoint(cardId);

  const city = useSelector(getCity);
  const isDataLoaded = useSelector(getIsDataLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(getOffersList());
    }
  }, [dispatch, isDataLoaded]);

  const filteredOffers = useSelector(getfilteredOffers);
  const offersByCity = useMemo(
    () => {
      const sortedOffers = [...filteredOffers];
      switch (sortType) {
        case SortingType.LOW_TO_HIGH:
          sortedOffers.sort((a, b) => a.price - b.price);
          break;
        case SortingType.HIGH_TO_LOW:
          sortedOffers.sort((a, b) => b.price - a.price);
          break;
        case SortingType.TOP_RATED_FIRST:
          sortedOffers.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return sortedOffers;
    },
    [sortType, filteredOffers],
  );

  const handleFavoriteButtonClick = (id,isFavorite) => {
    dispatch(postFavorite({
      id,
      status: isFavorite ? 0 : 1,
    }));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      {!isDataLoaded && <Spinner />}
      {isDataLoaded && offersByCity.length === 0 &&
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <Locations />
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    {' '}
                    {city}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"/>
            </div>
          </div>
        </main>}
      {isDataLoaded && offersByCity.length > 0 &&
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersByCity.length} places to stay in {city}
                </b>
                <Sorting
                  currentType={sortType}
                  onSortingChange={setSortType}
                  sortingTypes={SortingType}
                />
                <CardList
                  offers={offersByCity}
                  onCardHover={onCardHover}
                  onFavoriteButtonClick={handleFavoriteButtonClick}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    currentCity={city}
                    offers={offersByCity}
                    selectedPoint={selectedPoint}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}

export { Main };
export default Main;
