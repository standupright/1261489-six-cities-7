import {createReducer} from '@reduxjs/toolkit';
import {loadOffers,loadOffer} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  currentOfferData: {
    id: null,
    offer: null,
    nearby: null,
    comments: null,
  },
};

const offers = () => createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOfferData = {
        ...state.currentOfferData,
        ...action.payload,
      };
    });
});

export {offers};
