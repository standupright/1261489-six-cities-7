import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {requireAuthorization} from './store/action';
import {createAPI} from './api';
import {redirect} from './store/middlewares/redirect';
import {AuthStatus} from './const';
import {checkAuth} from './store/api-actions';
import rootReducer from './store/root-reducer';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render (
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById ('root'));
