import {createReducer} from '@reduxjs/toolkit';
import {loadOffers,loadOffer,updateOffer} from '../action';

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

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOfferData = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      const id = action.payload.id;
      if (state.offers[id]) {
        state.offers[id].isFavorite = action.payload.isFavorite;
      }
    });
});

export {offers};
