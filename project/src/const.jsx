export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id?',
  ROOT: '/',
  DEV_ROOM: '/dev-artist',
};

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const OfferInfo = {
  cardTypeClass: {
    cities: 'cities',
    favorite: 'favorites',
    nearPlaces: 'near-places',
  },
  cardImgWidth: {
    cities:  260,
    favorite: 150,
    nearPlaces: 260,
  },
  cardImgHeight: {
    cities:  260,
    favorite: 110,
    nearPlaces: 200,
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

export const NEARBY_OFFERS = 3;

export const SortingTypes = {
  TOP_RATED_FIRST: 'Top rated first',
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGHT_TO_LOW: 'Price: low to high',
};
