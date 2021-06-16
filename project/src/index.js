import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const NUMBER_OFFERS = 4;

ReactDOM.render (
  <React.StrictMode>
    <App numberOffers={NUMBER_OFFERS} offers={offers} />
  </React.StrictMode>,
  document.getElementById ('root'));
