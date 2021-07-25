import { createSelector } from 'reselect';
import { getCity } from '../cities/selector';
import { NameSpace } from '../root-reducer';

export const getDataOffers = (state) => state[NameSpace.OFFERS].offers;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;

export const getFavoritesData = (state) => state[NameSpace.OFFERS].favoritesData;
export const getIsFavoritesLoaded = (state) => state[NameSpace.OFFERS].isFavoritesLoaded;

export const getCurrentOffer = (state) => state[NameSpace.OFFERS].currentOfferData;
export const getIsCurrentOfferLoaded = (state) => state[NameSpace.OFFERS].isCurrentOfferLoaded;

export const getfilteredOffers = createSelector(
  getDataOffers,
  getCity,
  (offers,city) => offers.filter((offer) => offer.city.name === city),
);
