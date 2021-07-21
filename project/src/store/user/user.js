import {createReducer} from '@reduxjs/toolkit';
import {login, logout, requireAuthorization} from '../action';
import {AuthStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthStatus.UNKNOWN,
  user: null,
};

const user = createReducer (initialState, (builder) => {
  builder
    .addCase (login, (state, action) => {
      state.user = action.payload;
    })
    .addCase (logout, (state) => {
      state.authorizationStatus = AuthStatus.NO_AUTH;
    })
    .addCase (requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {user};
