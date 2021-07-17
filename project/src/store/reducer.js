import {ActionType} from './action';
import {AuthStatus} from '../const';

const initialState = {
  city: 'Paris',
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthStatus.UNKNOWN,
  user: null,
  currentOfferData: {
    id: null,
    offer: null,
    nearby: null,
    comments: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER_DATA:
      return {
        ...state,
        currentOfferData: {
          ...state.currentOfferData,
          ...action.payload,
        },
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthStatus.NO_AUTH,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
