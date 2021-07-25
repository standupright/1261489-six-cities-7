import React, { useEffect } from 'react';
import Card from '../card/card';
import { OfferInfo} from '../../const';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
  getFavoritesData,
  getIsFavoritesLoaded
} from '../../store/offers/selector';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList, updateFavoriteOffer } from '../../store/api-actions';
import Spinner from '../spinner/spinner';

function FavoritesScreen() {
  const favoriteOffers = useSelector(getFavoritesData);
  const isFavoritesLoaded = useSelector(getIsFavoritesLoaded);
  const dispatch = useDispatch();

  const getGroupedFavorites = (favorites) =>
    favorites.reduce((acc, favorite) => {
      const city = favorite.city.name;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(favorite);
      return acc;
    }, {});

  const groupedFavorites = getGroupedFavorites(favoriteOffers);
  const favoriteKeysLength = Object.keys(groupedFavorites).length;

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(getFavoritesList());
    }
  }, [getFavoritesList, isFavoritesLoaded]);

  const favoriteClass = OfferInfo.cardTypeClass.favorite;
  const cardImgWidth = OfferInfo.cardImgWidth.favorite;
  const cardImgHeight = OfferInfo.cardImgHeight.favorite;

  const handleFavoriteButtonClick = (id, isFavorite) => {
    dispatch(
      updateFavoriteOffer({
        id,
        status: isFavorite ? 0 : 1,
      }))
      .then(() => {
        dispatch(getFavoritesList());
      });
  };

  return (
    <div className='page'>
      <Header />
      {!isFavoritesLoaded && <Spinner />}
      {isFavoritesLoaded && favoriteKeysLength === 0 && (
        <main className='page__main page__main--favorites page__main--favorites-empty'>
          <div className='page__favorites-container container'>
            <section className='favorites favorites--empty'>
              <h1 className='visually-hidden'>Favorites (empty)</h1>
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}
      {isFavoritesLoaded && favoriteKeysLength > 0 && (
        <main className='page__main page__main--favorites'>
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {Object.keys(groupedFavorites).map((nameCity) => (
                  <li key={nameCity} className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#'>
                          <span>{nameCity}</span>
                        </a>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {groupedFavorites[`${nameCity}`].map((hotel) => (
                        <Card
                          key={`${hotel.city.name + favoriteClass + hotel.id}`}
                          hotel={hotel}
                          cardTypeClass={favoriteClass}
                          cardImgWidth={cardImgWidth}
                          cardImgHeight={cardImgHeight}
                          handleFavoriteButtonClick={handleFavoriteButtonClick}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}
      <Footer />
    </div>);
}

export { FavoritesScreen };
export default FavoritesScreen;
