import { combineReducers } from 'redux';
import { offers } from './offers/offers';
import { cities } from './cities/cities';
import { user } from './user/user';

export const NameSpace = {
  OFFERS: 'OFFERS',
  CITIES: 'CITIES',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.CITIES]: cities,
  [NameSpace.USER]: user,
});
