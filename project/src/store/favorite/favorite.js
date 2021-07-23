import {createReducer} from '@reduxjs/toolkit';
import {loadFavorties} from '../action';

const initialState = {
  isFavoritesLoading: false,
  favoritesData: [],
};

const favorite = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorties, (state, action) => {
      state.favoritesData = action.payload;
      state.isFavoritesLoading = true;
    });
});

export {favorite};
