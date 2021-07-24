import { createSelector } from 'reselect';
import { getCity } from '../cities/selector';
import { NameSpace } from '../root-reducer';

export const getDataOffers = (state) => state[NameSpace.OFFERS].offers;
export const getDataOffer = (state) => state[NameSpace.OFFERS].currentOfferData;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;

export const getFavoritesData = (state) => state[NameSpace.OFFERS].favoritesData;
export const getisFavoritesLoaded = (state) => state[NameSpace.OFFERS].isFavoritesLoaded;

export const getfilteredOffers = createSelector(
  getDataOffers,
  getCity,
  (offers,city) => offers.filter((offer) => offer.city.name === city),
);
