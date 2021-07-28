export const AppRoute = {
  ROOT: '/',
  ROOM: '/offer/:id?',
  FAVORITES: '/favorites',
  LOGIN: '/login',
  NOT_FOUND: '/404',
};

export const ApiRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS: '/hotels',
  OFFER: '/hotels/:id',
  COMMENTS: '/comments/:id',
  FAVORITES: '/favorite',
  FAVORITES_STATUS: '/favorite/:id/:status',
  NEARBY: '/hotels/:id/nearby',
};

export const CITIES = {
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  Amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

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
  offerTypes: ['apartment','room','house','hotel'],
};

export const RATING_MAX = 20;
export const NUBMER_IMAGES = 6;

export const STARS_QUANTITY = 5;

export const DEFAULT_CITY = {
  lat: 52.38333,
  lng: 4.9,
  zoom: 12,
};

export const URL_MARKER_DEAFULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const NEARBY_OFFERS = 3;

export const SortingType = {
  TOP_RATED_FIRST: 'Top rated first',
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
};

export const AuthStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CommentValidation = {
  MIN_RATING: 1,
  MAX_RATING: 5,
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

export const MONTHS= [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const OfferTypes = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house': 'House',
  'hotel': 'Hotel',
};
