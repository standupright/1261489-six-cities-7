import React, {useEffect} from 'react';
import Card from '../card/card';
import {OfferInfo, AuthStatus, AppRoute} from '../../const';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getfilteredFavorites, getIsFavoritesLoading} from '../../store/favorite/selector';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoritesList} from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import {getAuthorizationStatus} from '../../store/user/selector';
import { Redirect } from 'react-router-dom';

function FavoritesScreen (props) {
  const authorizationStatus = useSelector (getAuthorizationStatus);
  const favoriteOffers = useSelector (getfilteredFavorites);
  const isFavoritesLoading = useSelector (getIsFavoritesLoading);
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (!isFavoritesLoading) {
        dispatch (getFavoritesList ());
      }
    },
    [getFavoritesList, isFavoritesLoading],
  );

  const favoriteClass = OfferInfo.cardTypeClass.favorite;
  const cardImgWidth = OfferInfo.cardImgWidth.favorite;
  const cardImgHeight = OfferInfo.cardImgHeight.favorite;

  return (authorizationStatus === AuthStatus.AUTH
    ? (
      <div className="page">
        <Header />
        {!isFavoritesLoading && <Spinner />}
        {isFavoritesLoading &&
          favoriteOffers.length === 0 &&
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">
                    Save properties to narrow down search or plan your future trips.
                  </p>
                </div>
              </section>
            </div>
          </main>}
        {isFavoritesLoading &&
          favoriteOffers.length > 0 &&
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.keys (favoriteOffers).map ((nameCity) => (
                    <li key={nameCity} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{nameCity}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {favoriteOffers[`${nameCity}`].map ((hotel) => (
                          <Card
                            key={`${hotel.city.name + favoriteClass + hotel.id}`}
                            hotel={hotel}
                            cardTypeClass={favoriteClass}
                            cardImgWidth={cardImgWidth}
                            cardImgHeight={cardImgHeight}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>}
        <Footer />
      </div>
    )
    : (<Redirect to={AppRoute.LOGIN} />));
}

export {FavoritesScreen};
export default FavoritesScreen;
