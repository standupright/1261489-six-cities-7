import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const numberOffers = offers.length;

ReactDOM.render (
  <React.StrictMode>
    <App numberOffers={numberOffers} offers={offers} />
  </React.StrictMode>,
  document.getElementById ('root'));
