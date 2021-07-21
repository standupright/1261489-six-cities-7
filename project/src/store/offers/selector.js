import { NameSpace } from '../root-reducer';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getOffer = (state) => state[NameSpace.OFFERS].currentOfferData;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;
