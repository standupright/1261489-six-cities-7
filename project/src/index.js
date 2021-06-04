import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: '120',
    type: 'Apartment',
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: '80',
    type: 'Private room',
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    price: '132',
    type: 'Apartment',
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    price: '180',
    type: 'Apartment',
  },
  {
    id: 5,
    title: 'Wood and stone place',
    price: '80',
    type: 'Private room',
  },
];

const numberPlaces = places.length;

ReactDOM.render (
  <React.StrictMode>
    <App numberPlaces={numberPlaces} places={places} />
  </React.StrictMode>,
  document.getElementById ('root'));
