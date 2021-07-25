import {createReducer} from '@reduxjs/toolkit';
import {loadOffers,updateOffer, loadFavorties,updateFavorite, updateCurrentOffer, loadCurrentOffer} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  isFavoritesLoaded: false,
  favoritesData: [],
  isCurrentOfferLoaded: false,
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
    .addCase(updateOffer, (state, action) => {
      const id = action.payload.id;
      if (state.offers[id-1]) {
        state.offers[id-1].isFavorite = action.payload.isFavorite;
      }
      state.isFavoritesLoaded = false;
      state.isCurrentOfferLoaded = false;
    })

    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOfferData = action.payload;
      state.isCurrentOfferLoaded = true;
    })
    .addCase(updateCurrentOffer, (state, action) => {
      state.currentOfferData.offer = action.payload;
      state.isDataLoaded = false;
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
      state.isCurrentOfferLoaded = false;
    });
});

export {offers};
