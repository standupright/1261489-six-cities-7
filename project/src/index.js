import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from './store/action';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(ActionCreator.addOffers(offers));

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
