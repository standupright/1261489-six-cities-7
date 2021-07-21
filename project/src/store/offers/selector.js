import { NameSpace } from '../root-reducer';

export const getDataOffers = (state) => state[NameSpace.OFFERS].offers;
export const getDataOffer = (state) => state[NameSpace.OFFERS].currentOfferData;
export const getIsDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;
