import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from '../action';

const initialState = {
  city: 'Paris',
};

const cities = () => createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});

export {cities};
