import {ActionType} from './action';
import offers from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: state.city,
      };
    case ActionType.ADD_OFFERS:
      return {
        ...state,
        offers: state.offers,
      };
    default:
      return state;
  }
};

export {reducer};
