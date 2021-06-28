export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id?',
  ROOT: '/',
  DEV_ROOM: '/dev-artist',
};

export const OfferInfo = {
  cardTypeClass: {
    cities: 'cities',
    favorite: 'favorites',
  },
  cardImgWidth: {
    cities:  260,
    favorite: 150,
  },
  cardImgHeight: {
    cities:  260,
    favorite: 110,
  },
  offerTypes: ['Apartment','Private room','House','Hotel'],
};

export const RATING_MAX = 0.05;

export const STARS_QUANTITY = 5;

export const DEFAULT_CITY ={
  lat: 52.38333,
  lng: 4.9,
  zoom: 12,
};

export const URL_MARKER_DEAFULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
