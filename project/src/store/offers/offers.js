import {createReducer} from '@reduxjs/toolkit';
import {loadOffers,loadOffer,updateOffer, loadFavorties,updateFavorite} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  isFavoritesLoaded: false,
  favoritesData: [],
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
      if (state.offers[id-1]) {
        state.offers[id-1].isFavorite = action.payload.isFavorite;
      }
      state.isFavoritesLoaded = false;
    })
    .addCase(loadFavorties, (state, action) => {
      state.favoritesData = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(updateFavorite, (state, action) => {
      const id = action.payload.id;
      state.favoritesData.forEach((offer) => {
        if (offer.id === id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
      state.isDataLoaded = false;
    });
});

export {offers};
